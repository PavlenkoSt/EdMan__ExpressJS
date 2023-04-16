import { LessonService } from '../services';

export class LessonsController {
  constructor() {
    this.services = {
      lessons: new LessonService(),
    };
  }

  async create(data) {
    const lesson = await this.services.lessons.create(data);

    return lesson;
  }
}
