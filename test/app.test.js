const request = require('supertest');
const app = require('../app');

test('GET / should return success message', async () => {
  const response = await request(app);

  expect(response.statusCode).toBe(200);
  expect(response.text).toBe('CI/CD Pipeline Working!');
});

test('example test', () => {
  expect(1 + 1).toBe(2);
});