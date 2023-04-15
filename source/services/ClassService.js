import { ClassODM } from '../odm';

export class ClassService {
  constructor(data) {
    this.data = data;
  }

  async create() {
    const classItem = await ClassODM.create(this.data);

    return classItem;
  }
}
