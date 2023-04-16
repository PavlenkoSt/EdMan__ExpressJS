import { ClassService } from '../services';

export class ClassesController {
  constructor() {
    this.services = {
      classService: new ClassService(),
    };
  }

  async getAll() {
    const classes = await this.services.classService.getAll();

    return classes;
  }

  async getOneByHash(hash) {
    const classItem = await this.services.classService.getOneByHash(hash);

    return classItem;
  }

  async create(classData) {
    const classItem = await this.services.classService.create(classData);

    return classItem;
  }

  async updateOneByHash(hash, data) {
    const newClass = await this.services.classService.updateOneByHash(hash, data);

    return newClass;
  }

  async deleteOneByHash(hash) {
    const deleted = await this.services.classService.deleteOneByHash(hash);

    return deleted;
  }
}
