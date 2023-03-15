import Ajv from 'ajv';

export const validateBody = schema => (req, res, next) => {
  const { body } = req;

  const ajv = new Ajv();

  const validate = ajv.compile(schema);

  if (validate(body)) {
    return next();
  }

  return res.status(400).json(validate.errors);
};

export const validateQuery = schema => (req, res, next) => {
  const { query } = req;

  const ajv = new Ajv();

  const validate = ajv.compile(schema);

  if (validate(query)) {
    return next();
  }

  return res.status(400).json(validate.errors);
};
