import { LessonODM } from '../odm';

export class LessonService {
  constructor() {}

  async getAll() {
    const lessons = await LessonODM.find().lean();

    return lessons;
  }

  async getOneByHash(hash) {
    const lesson = await LessonODM.find({ hash }).lean();

    return lesson;
  }

  async create(data) {
    const lesson = await LessonODM.create(data).lean();

    return lesson;
  }

  async updateOneByHash(hash, data) {
    const newLesson = await LessonODM.findOneAndUpdate({ hash }, data, { new: true }).lean();

    return newLesson;
  }

  async deleteOneByHash(hash) {
    const deleted = await LessonODM.findOneAndDelete({ hash }).lean();

    return deleted;
  }
}
