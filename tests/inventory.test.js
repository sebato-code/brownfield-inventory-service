const request = require('supertest');
const app = require('../src/index');

describe('GET /api/v1/inventory/products', () => {
  it('should return list of products', async () => {
    const res = await request(app).get('/api/v1/inventory/products');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toBeGreaterThan(0);
  });
});