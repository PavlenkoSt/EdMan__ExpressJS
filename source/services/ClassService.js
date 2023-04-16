import { ClassODM } from '../odm';

export class ClassService {
  constructor() {}

  async create(data) {
    const classItem = await ClassODM.create(data);

    return classItem;
  }
}
