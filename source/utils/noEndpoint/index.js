import { NotFoundError } from '../errors';

export const noEndpoint = (req, res, next) => {
  const error = new NotFoundError('Enpoint not found');

  next(error);
};
