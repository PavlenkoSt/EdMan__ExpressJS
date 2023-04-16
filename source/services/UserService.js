import { UserODM } from '../odm';

import { NotFoundError } from '../utils/errors';

const notFoundErrorMessage = 'User not found';

export class UserService {
  constructor() {}

  async getAll() {
    const users = await UserODM.find().lean();

    return users;
  }

  async create(data) {
    const user = await UserODM.create(data).lean();

    return user;
  }

  async getOneByHash(hash) {
    const user = await UserODM.findOne({ hash }).lean();

    if (!user) {
      throw new NotFoundError(notFoundErrorMessage);
    }

    return user;
  }

  async updateOneByHash(hash, data) {
    const user = await UserODM.findOneAndUpdate({ hash }, data, { new: true }).lean();

    if (!user) {
      throw new NotFoundError(notFoundErrorMessage);
    }

    return user;
  }

  async deleteOneByHash(hash) {
    const user = await UserODM.findOneAndDelete({ hash }).lean();

    if (!user) {
      throw new NotFoundError(notFoundErrorMessage);
    }

    return user;
  }
}
