import request from 'supertest';

import { app } from '../../../source/server';

describe('GET /classes', () => {
  test('should return 200', async done => {
    const response = await request(app).get('/classes');
    expect(response.statusCode).toBe(200);
    done();
  });

  test('should return empty array', async done => {
    const response = await request(app).get('/classes');
    console.log('response.body', response.body);
    expect(response.body).toEqual([]);
    done();
  });
});
