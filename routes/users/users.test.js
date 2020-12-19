const app = require('../../server');
const supertest = require('supertest');
const request = supertest(app);

it('Check Users List', async (done) => {
  const response = await request.get('/users');
  console.log(res.status);
  expect(response.status).toBe(200);
  done();
});
