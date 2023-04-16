import { AuthService, UserService } from '../services';

export class AuthController {
  constructor() {
    this.services = {
      auth: new AuthService(),
      user: new UserService(),
    };
  }

  async auth(email, password) {
    const user = await this.services.user.findOneByPrimaryEmail(email);

    const token = await this.services.auth.auth(user, password);

    return token;
  }
}
