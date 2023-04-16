import bcrypt from 'bcryptjs';

import { ValidationError } from '../utils/errors';
import { generateToken } from '../utils';

export class AuthService {
  constructor() {}

  async auth(user, password) {
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) throw new ValidationError('Invalid credentials');

    const token = generateToken(user);

    return token;
  }
}
