import mongoose from 'mongoose';

const contentDetailSchema = new mongoose.Schema({
  hash: { type: String, unique: true },
  title: { type: String },
  order: { type: Number },
  uri: { type: String },
});

const lessonSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  order: { type: Number, index: true },
  hash: { type: String, unique: true },
  availability: [String],
  content: {
    videos: [contentDetailSchema],
    keynotes: [contentDetailSchema],
  },
  createdAt: { type: Date, default: Date.now() },
  modifiedAt: { type: Date },
});

const LessonODM = mongoose.model('Lesson', lessonSchema);

export { LessonODM };
