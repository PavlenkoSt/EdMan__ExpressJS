import mongoose from 'mongoose';

import { generateHashById } from '../utils';

import { UserService, LessonService } from '../services';

const userService = new UserService();
const lessonService = new LessonService();

const studentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    validate: {
      validator: async function (id) {
        const user = await userService.getOneById(id);

        return !!user;
      },
      message: props => `${props.value} is not a valid user ID`,
    },
  },
  expelled: { type: Boolean, default: false },
  notes: { type: String, max: 250 },
});

const lessonsSchema = new mongoose.Schema({
  lesson: {
    type: mongoose.Types.ObjectId,
    ref: 'Lesson',
    validate: {
      validator: async function (id) {
        const lesson = await lessonService.getOneById(id);

        return !!lesson;
      },
    },
  },
  scheduled: { type: Date },
});

const classSchema = new mongoose.Schema(
  {
    title: { type: String, max: 30 },
    description: { type: String, max: 250 },
    hash: { type: String, unique: true },
    students: [studentSchema],
    lessons: [lessonsSchema],
    duration: {
      started: { type: Date },
      closed: { type: Date },
    },
    order: { type: Number, index: true },
  },
  { timestamps: true }
);

classSchema.index({ title: 'text', description: 'text' });

classSchema.pre('save', async function (next) {
  try {
    const hash = await generateHashById(this._id.toString());

    this.hash = hash;

    return next();
  } catch (e) {
    next(e);
  }
});

const ClassODM = mongoose.model('Class', classSchema);

export { ClassODM };
