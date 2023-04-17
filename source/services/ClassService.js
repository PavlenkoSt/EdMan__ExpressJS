import { ClassODM, UserODM } from '../odm';
import { NotFoundError } from '../utils/errors';

const notFoundMessage = 'Class not found';

export class ClassService {
  constructor() {}

  async getAll() {
    const classes = await ClassODM.find()
      .populate({ path: 'students.user', select: 'name hash roles' })
      .populate({ path: 'lessons.lesson' });

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
    const classItem = await ClassODM.create(data);

    return classItem;
  }

  async updateOneByHash(hash, data) {
    const newClass = await ClassODM.findOneAndUpdate({ hash }, data, { new: true });

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
