import { UserService } from '../services';

export class UsersController {
  constructor(userData) {
    this.services = {
      user: new UserService(userData),
    };
  }

  async create() {
    const user = await this.services.user.createUser();

    return user;
  }
}
