import mongoose from 'mongoose';

import { generateHashById } from '../utils';

const contentDetailSchema = new mongoose.Schema({
  hash: { type: String, unique: true },
  title: { type: String },
  order: { type: Number },
  uri: { type: String },
});

const lessonSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    order: { type: Number, index: true },
    hash: { type: String, unique: true },
    availability: [String],
    content: {
      videos: [contentDetailSchema],
      keynotes: [contentDetailSchema],
    },
  },
  { timestamps: true }
);

lessonSchema.pre('save', async function (next) {
  try {
    const hash = await generateHashById(this._id.toString());

    this.hash = hash;

    return next();
  } catch (e) {
    next(e);
  }
});

const LessonODM = mongoose.model('Lesson', lessonSchema);

export { LessonODM };
