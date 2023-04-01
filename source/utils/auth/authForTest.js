import request from 'supertest';

import { app } from '../../server';

export const authForTest = async () => {
  const authRes = await request(app).post('/login').send({
    email: 'verbatim8872@gmail.com',
  });

  const token = authRes.headers['x-token'];

  return token;
};
