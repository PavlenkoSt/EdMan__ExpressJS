export const getUserSchema = {
  type: 'object',
  properties: {
    limit: { type: 'string', default: '1' },
    page: { type: 'string', default: '10' },
  },
};
