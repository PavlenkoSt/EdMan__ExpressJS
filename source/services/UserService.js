import { UserODM } from '../odm';

export class UserService {
  constructor() {}

  async createUser(data) {
    const user = await UserODM.create(data);

    return user;
  }
}
