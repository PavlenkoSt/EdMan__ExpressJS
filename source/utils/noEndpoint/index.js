import { NotFoundError } from '../errors';

export const noEndpoint = (req, res, next) => {
  console.log('req', req);
  const error = new NotFoundError(`Enpoint not found -> ${req.method} ${req.originalUrl}`);

  next(error);
};
