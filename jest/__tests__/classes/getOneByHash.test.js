import request from 'supertest';

import { app } from '../../../source/server';
import { authForTest } from '../../../source/utils';

describe('GET /classes/:hash', () => {
  test('should return 401', async done => {
    const response = await request(app).get('/classes/randomHash');
    expect(response.statusCode).toBe(401);
    done();
  });

  test('should return 200', async done => {
    const token = await authForTest();

    const response = await request(app).get('/classes/randomHash').set('Authorization', `Bearer ${token}`);
    expect(response.statusCode).toBe(200);

    done();
  });
});
