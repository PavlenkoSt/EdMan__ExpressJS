import { LessonService } from '../services';
import { NotFoundError } from '../utils/errors';

const notFoundMessage = 'Lesson not found';

export class LessonsController {
  constructor() {
    this.services = {
      lessons: new LessonService(),
    };
  }

  async getAll() {
    const lessons = await this.services.lessons.getAll();

    return lessons;
  }

  async getOneByHash(hash) {
    const lesson = await this.services.lessons.getOneByHash(hash);

    if (!lesson) {
      throw new NotFoundError(notFoundMessage);
    }

    return lesson;
  }

  async create(data) {
    const lesson = await this.services.lessons.create(data);

    return lesson;
  }

  async updateOneByHash(hash, data) {
    const newLesson = await this.services.lessons.updateOneByHash(hash, data);

    if (!newLesson) {
      throw new NotFoundError(notFoundMessage);
    }

    return newLesson;
  }

  async deleteOneByHash(hash) {
    const deleted = await this.services.lessons.deleteOneByHash(hash);

    if (!deleted) {
      throw new NotFoundError(notFoundMessage);
    }

    return deleted;
  }
}
