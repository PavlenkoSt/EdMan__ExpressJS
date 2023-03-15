export const loginSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    password: { type: 'string' },
  },
  required: ['name', 'password'],
  additionalProperties: false,
};
