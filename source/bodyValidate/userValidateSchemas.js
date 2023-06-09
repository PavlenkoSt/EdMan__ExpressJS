const userSchema = {
  name: {
    type: 'object',
    properties: {
      first: { type: 'string' },
      last: { type: 'string' },
    },
  },
  phones: {
    type: 'array',
    items: {
      phone: { type: 'string' },
      primary: { type: 'boolean' },
    },
  },
  emails: {
    type: 'array',
    items: {
      email: { type: 'string' },
      primary: { type: 'boolean' },
    },
  },
  password: { type: 'string' },
  sex: { type: 'string' },
  roles: { type: 'array', items: { type: 'string' } },
  social: {
    type: 'object',
    properties: {
      facebook: { type: 'string' },
      linkedin: { type: 'string' },
      github: { type: 'string' },
      skype: { type: 'string' },
    },
  },
};

export const createUserSchema = {
  type: 'object',
  properties: userSchema,
  required: ['name', 'emails', 'phones', 'password', 'sex', 'roles'],
  additionalProperties: false,
};

export const updateUserSchema = {
  type: 'object',
  properties: userSchema,
  additionalProperties: false,
};
