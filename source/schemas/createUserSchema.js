export const createUserSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    email: { type: 'string', format: 'email' },
    phone: { type: 'string', pattern: '^\\+\\d{9,12}$' },
    password: { type: 'string' },
    sex: { type: 'string' },
    role: { type: 'string' },
  },
  required: ['name', 'email', 'phone', 'password', 'sex', 'role'],
  additionalProperties: false,
};
