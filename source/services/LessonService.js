import { LessonODM } from '../odm';
import { NotFoundError } from '../utils/errors';

const notFoundErrorMessage = 'Lesson not found';

export class LessonService {
  constructor() {}

  async getAll() {
    const lessons = await LessonODM.find().lean();

    return lessons;
  }

  async getOneById(id) {
    const lesson = await LessonODM.findById(id).lean();

    if (!lesson) {
      throw new NotFoundError(notFoundErrorMessage);
    }

    return lesson;
  }

  async getOneByHash(hash) {
    const lesson = await LessonODM.find({ hash }).lean();

    if (!lesson) {
      throw new NotFoundError(notFoundErrorMessage);
    }

    return lesson;
  }

  async create(data) {
    const lesson = await LessonODM.create(data);

    return lesson;
  }

  async updateOneByHash(hash, data) {
    const newLesson = await LessonODM.findOneAndUpdate({ hash }, data, { new: true });

    if (!lesson) {
      throw new NotFoundError(notFoundErrorMessage);
    }

    return newLesson;
  }

  async deleteOneByHash(hash) {
    const deleted = await LessonODM.findOneAndDelete({ hash });

    if (!lesson) {
      throw new NotFoundError(notFoundErrorMessage);
    }

    return deleted;
  }
}
