const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const path = require('path');

let dbInstance = null;

async function getDatabase() {
  if (dbInstance) return dbInstance;

  dbInstance = await open({
    filename: process.env.NODE_ENV === 'test' ? ':memory:' : path.join(__dirname, '../../inventory.sqlite'),
    driver: sqlite3.Database
  });

  await dbInstance.exec();

  // Insert initial seed data
  const count = await dbInstance.get('SELECT COUNT(*) as count FROM products');
  if (count.count === 0) {
    await dbInstance.run('INSERT INTO products (sku, name, stock, price) VALUES (?, ?, ?, ?)', ['PROD-001', 'Laptop B2B Pro', 15, 1200]);
    await dbInstance.run('INSERT INTO products (sku, name, stock, price) VALUES (?, ?, ?, ?)', ['PROD-002', 'Monitor 27 Ultra', 30, 350]);
  }

  return dbInstance;
}

module.exports = { getDatabase };