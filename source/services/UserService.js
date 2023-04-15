import { UserODM } from '../odm';

export class UserService {
  constructor(data) {
    this.data = data;
  }

  async createUser() {
    const user = await UserODM.create(this.data);

    return user;
  }
}
