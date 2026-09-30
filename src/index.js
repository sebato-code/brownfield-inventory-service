const express = require('express');
const inventoryRoutes = require('./controllers/inventoryController');
const { getDatabase } = require('./db/database');

const app = express();
app.use(express.json());

// Initialize SQLite DB
getDatabase().catch(err => console.error('Error initializing SQLite:', err));

app.use('/api/v1/inventory', inventoryRoutes);

if (process.env.NODE_ENV !== 'test') {
  app.listen(3000, () => console.log('Inventory Service running on port 3000'));
}

module.exports = app;