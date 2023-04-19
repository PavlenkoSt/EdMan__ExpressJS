import mongoose from 'mongoose';

import { generateHashById, urlRegExp } from '../utils';

const contentDetailSchema = new mongoose.Schema({
  hash: { type: String, unique: true },
  title: { type: String, required: true, max: 30 },
  order: { type: Number },
  uri: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return urlRegExp.test(v);
      },
      message: props => `${props.value} is not a valid URL!`,
    },
  },
});

const lessonSchema = new mongoose.Schema(
  {
    title: { type: String, max: 30 },
    description: { type: String, max: 250 },
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
