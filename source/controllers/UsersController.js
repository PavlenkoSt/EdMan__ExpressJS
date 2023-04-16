import { UserService } from '../services';

export class UsersController {
  constructor() {
    this.services = {
      user: new UserService(),
    };
  }

  async create(data) {
    const user = await this.services.user.createUser(data);

    return user;
  }
}
