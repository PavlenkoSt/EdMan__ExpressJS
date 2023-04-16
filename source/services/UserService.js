import { UserODM } from '../odm';

import { NotFoundError } from '../utils/errors';

const notFoundErrorMessage = 'User not found';

export class UserService {
  constructor() {}

  async getAll() {
    const users = await UserODM.find();

    return users;
  }

  async create(data) {
    const user = await UserODM.create(data);

    return user;
  }

  async getOneByHash(hash) {
    const user = await UserODM.findOne({ hash });

    if (!user) {
      throw new NotFoundError(notFoundErrorMessage);
    }

    return user;
  }

  async updateOneByHash(hash, data) {
    const user = await UserODM.findOneAndUpdate({ hash }, data, { new: true });

    if (!user) {
      throw new NotFoundError(notFoundErrorMessage);
    }

    return user;
  }

  async deleteOneByHash(hash) {
    const user = await UserODM.findOneAndDelete({ hash });

    if (!user) {
      throw new NotFoundError(notFoundErrorMessage);
    }

    return user;
  }
}
