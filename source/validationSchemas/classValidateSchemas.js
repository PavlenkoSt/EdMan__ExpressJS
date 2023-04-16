const studentSchema = {
  type: 'object',
  properties: {
    user: { type: 'string' },
    status: { type: 'string' },
    expelled: { type: 'string' },
    notes: { type: 'string' },
  },
};

const lessonsSchema = {
  type: 'object',
  properties: {
    lesson: { type: 'string' },
    scheduled: { type: 'string', format: 'date-time' },
  },
};

const classSchema = {
  title: { type: 'string' },
  description: { type: 'string' },
  students: {
    type: 'array',
    items: studentSchema,
  },
  lessons: {
    type: 'array',
    items: lessonsSchema,
  },
  duration: {
    type: 'object',
    properties: {
      started: { type: 'string', format: 'date-time' },
      closed: { type: 'string', format: 'date-time' },
    },
  },
  order: { type: 'integer' },
};

export const createClassSchema = {
  type: 'object',
  properties: classSchema,
  required: ['title', 'description', 'duration', 'order'],
};

export const updateClassSchema = {
  type: 'object',
  properties: classSchema,
};
