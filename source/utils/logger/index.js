import winston from 'winston';
import os from 'os';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

export const loggerMiddleware = (req, res, next) => {
  logger.info(
    `Method -> ${req.method} ${os.EOL} Date -> ${new Date().toUTCString()} ${os.EOL} Payload -> ${JSON.stringify(
      req.body
    )}`
  );

  return next();
};

export const errorLoggerMiddleware = (err, req, res, next) => {
  if (process.env.NODE_ENV !== 'test') {
    logger.error(`${new Date().toUTCString()} ${err}`);
  }

  res.status(err.statusCode || 500).json({
    messaage: err.message,
  });
};
