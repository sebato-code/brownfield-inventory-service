const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

router.get('/products', async (req, res) => {
  res.json([
    { sku: 'PROD-001', name: 'Laptop B2B Pro', stock: 15, price: 1200 },
    { sku: 'PROD-002', name: 'Monitor 27 Ultra', stock: 30, price: 350 }
  ]);
});

module.exports = router;