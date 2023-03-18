import winston from 'winston';

import { NotFoundError, ValidationError } from '../errors';

const { combine, timestamp, printf, colorize } = winston.format;

const format = combine(
  colorize(),
  timestamp(),
  printf(({ message, timestamp, originalUrl, method, body, details }) => {
    let detailsRes;

    try {
      detailsRes = JSON.stringify(details);
    } catch (e) {
      detailsRes = details;
    }

    return `${timestamp} ${method} ${originalUrl} | payload -> ${JSON.stringify(body)} | ${message || ''} ${
      detailsRes || ''
    }`;
  })
);

const transports = {
  info: new winston.transports.File({
    filename: 'logs/combined.log',
    level: 'info',
  }),
  error: new winston.transports.File({
    filename: 'logs/errors.log',
    level: 'error',
  }),
  validationError: new winston.transports.File({
    filename: 'logs/validation-errors.log',
    level: 'error',
  }),
  notFoundError: new winston.transports.File({
    filename: 'logs/not-found-errors.log',
    level: 'error',
  }),
};

const infoLogger = winston.createLogger({
  level: 'info',
  transports: [transports.info, transports.error],
  format,
});

const validationErrorLogger = winston.createLogger({
  level: 'error',
  transports: [transports.info, transports.validationError],
  format,
});

const notFoundErrorLogger = winston.createLogger({
  level: 'error',
  transports: [transports.error, transports.notFoundError],
  format,
});

if (process.env.NODE_ENV !== 'production') {
  const consoleTransport = new winston.transports.Console({
    format: winston.format.simple(),
  });

  infoLogger.add(consoleTransport);
  validationErrorLogger.add(consoleTransport);
  notFoundErrorLogger.add(consoleTransport);
}

export const loggerMiddleware = (req, res, next) => {
  const { originalUrl, method, body } = req;

  infoLogger.info({ originalUrl, method, body, message: 'Info' });

  return next();
};

export const errorLoggerMiddleware = (err, req, res, next) => {
  const { originalUrl, method, body } = req;
  const { details, message, statusCode } = err;

  if (process.env.NODE_ENV !== 'test') {
    const log = { message, details, originalUrl, method, body };

    if (err instanceof ValidationError) {
      validationErrorLogger.error(log);
    } else if (err instanceof NotFoundError) {
      notFoundErrorLogger.error(log);
    } else {
      infoLogger.error(log);
    }
  }

  const json = { message };

  if (details) json.details = details;

  res.status(statusCode || 500).json(json);
};
