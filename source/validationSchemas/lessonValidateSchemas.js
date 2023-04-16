const contentDetails = {
  type: 'object',
  properties: {
    hash: { type: 'string' },
    title: { type: 'string' },
    order: { type: 'integer' },
    uri: { type: 'string' },
  },
};

const lessonSchema = {
  title: { type: 'string' },
  description: { type: 'string' },
  order: { type: 'integer' },
  availability: { type: 'array', items: { type: 'string' } },
  content: {
    videos: contentDetails,
    keynotes: contentDetails,
  },
};

export const createLessonSchema = {
  type: 'object',
  properties: lessonSchema,
  required: ['title', 'description', 'order'],
};

export const updateLessonSchema = {
  type: 'object',
  properties: lessonSchema,
};
