import { UserModel } from '../models';

export class UsersController {
  constructor(data) {
    this.models = {
      user: new UserModel(data),
    };
  }

  async create() {
    const user = await this.models.user.createUser();

    return user;
  }
}
