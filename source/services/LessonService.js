import { LessonODM } from '../odm';

export class LessonService {
  constructor(data) {
    this.data = data;
  }

  async create() {
    const lesson = await LessonODM.create(this.data);

    return lesson;
  }
}
