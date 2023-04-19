import { UserODM } from '../odm';

import { NotFoundError, ValidationError } from '../utils/errors';

const notFoundErrorMessage = 'User not found';

export class UserService {
  constructor() {}

  async getAll() {
    const users = await UserODM.find().lean();

    return users;
  }

  async create(data) {
    const user = await UserODM.create(data);

    return user;
  }

  async getOneById(id) {
    const user = await UserODM.findById(id).lean();

    if (!user) {
      throw new NotFoundError(notFoundErrorMessage);
    }

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

  async findOneByPrimaryEmail(email) {
    const user = await UserODM.findOne({
      emails: {
        $elemMatch: { email, primary: true },
      },
    });

    if (!user) {
      throw new ValidationError('Invalid credentials');
    }

    return user;
  }
}
