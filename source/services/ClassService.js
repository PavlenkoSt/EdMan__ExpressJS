import { ClassODM } from '../odm';
import { NotFoundError } from '../utils/errors';

const notFoundMessage = 'Class not found';

export class ClassService {
  constructor() {}

  async getAll() {
    const classes = await ClassODM.find().lean();

    return classes;
  }

  async getOneByHash(hash) {
    const classItem = await ClassODM.findOne({ hash }).lean();

    if (!classItem) {
      throw new NotFoundError(notFoundMessage);
    }

    return classItem;
  }

  async create(data) {
    const classItem = await ClassODM.create(data).lean();

    return classItem;
  }

  async updateOneByHash(hash, data) {
    const newClass = await ClassODM.findOneAndUpdate({ hash }, data, { new: true }).lean();

    if (!newClass) {
      throw new NotFoundError(notFoundMessage);
    }

    return newClass;
  }

  async deleteOneByHash(hash) {
    const deleted = await ClassODM.findOneAndDelete({ hash });

    if (!deleted) {
      throw new NotFoundError(notFoundMessage);
    }

    return deleted;
  }
}
