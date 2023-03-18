import Ajv from 'ajv';

import { ValidationError } from '../errors';

export const validateBody = schema => (req, res, next) => {
  const { body } = req;

  const ajv = new Ajv();

  const validate = ajv.compile(schema);

  if (validate(body)) {
    return next();
  }

  throw new ValidationError('Invalid body', validate.errors);
};
