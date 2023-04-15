import { LessonService } from '../services';

export class LessonsController {
  constructor(lessonData) {
    this.services = {
      lessons: new LessonService(lessonData),
    };
  }

  async create() {
    const lesson = await this.services.lessons.create();

    return lesson;
  }
}
