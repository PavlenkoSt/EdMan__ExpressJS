import { ClassService } from '../services';

export class ClassesController {
  constructor() {
    this.services = {
      classService: new ClassService(),
    };
  }

  async create(classData) {
    const classItem = await this.services.classService.create(classData);

    return classItem;
  }
}
