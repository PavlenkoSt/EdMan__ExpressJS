import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId },
  status: { type: String },
  expelled: { type: String },
  notes: { type: String },
});

const lessonsSchema = new mongoose.Schema({
  lesson: { type: mongoose.Types.ObjectId },
  scheduled: { type: Date },
});

const classSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
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

const ClassODM = mongoose.model('Class', classSchema);

export { ClassODM };
