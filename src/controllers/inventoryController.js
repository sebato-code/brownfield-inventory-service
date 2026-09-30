const express = require('express');
const router = express.Router();
const { getDatabase } = require('../db/database');

router.get('/products', async (req, res) => {
  try {
    const db = await getDatabase();
    const products = await db.all('SELECT sku, name, stock, price FROM products');
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;