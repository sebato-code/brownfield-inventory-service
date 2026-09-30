const request = require('supertest');
const app = require('../src/index');
const { getDatabase } = require('../src/db/database');

describe('GET /api/v1/inventory/products', () => {
  beforeAll(async () => {
    await getDatabase();
  });

  it('should return list of products from SQLite', async () => {
    const res = await request(app).get('/api/v1/inventory/products');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty('sku');
  });
});