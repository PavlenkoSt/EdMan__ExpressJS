import { LessonODM } from '../odm';

export class LessonService {
  constructor() {}

  async create(data) {
    const lesson = await LessonODM.create(data).lean();

    return lesson;
  }
}
