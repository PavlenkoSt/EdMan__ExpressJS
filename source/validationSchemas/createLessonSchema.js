const contentDetails = {
  type: 'object',
  properties: {
    hash: { type: 'string' },
    title: { type: 'string' },
    order: { type: 'integer' },
    uri: { type: 'string' },
  },
};

export const createLessonSchema = {
  type: 'object',
  properties: {
    title: { type: 'string' },
    description: { type: 'string' },
    order: { type: 'integer' },
    hash: { type: 'string' },
    availability: { type: 'array', items: { type: 'string' } },
    content: {
      videos: contentDetails,
      keynotes: contentDetails,
    },
  },
  required: ['title', 'description', 'hash', 'order'],
};
