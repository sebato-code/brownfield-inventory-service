const express = require('express');
const inventoryRoutes = require('./controllers/inventoryController');

const app = express();
app.use(express.json());

app.use('/api/v1/inventory', inventoryRoutes);

if (process.env.NODE_ENV !== 'test') {
  app.listen(3000, () => console.log('Inventory Service v1 running on port 3000'));
}

module.exports = app;