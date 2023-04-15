import { ClassService } from '../services';

export class ClassesController {
  constructor(classData) {
    this.services = {
      classService: new ClassService(classData),
    };
  }

  async create() {
    const classItem = await this.services.classService.create();

    return classItem;
  }
}
