import { UserService } from '../services';

export class UsersController {
  constructor() {
    this.services = {
      user: new UserService(),
    };
  }

  async create(data) {
    const user = await this.services.user.create(data);

    return user;
  }

  async getOneByHash(hash) {
    const user = await this.services.user.getOneByHash(hash);

    return user;
  }

  async updateOneByHash(hash, data) {
    const user = await this.services.user.updateOneByHash(hash, data);

    return user;
  }

  async getAll() {
    const users = await this.services.user.getAll();

    return users;
  }

  async deleteOneByHash(hash) {
    const user = await this.services.user.deleteOneByHash(hash);

    return user;
  }
}
