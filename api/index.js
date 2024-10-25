require('dotenv').config();
const express = require('express');
const logger = require('../middleware/logger');
const taskRoutes = require('../routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(logger);

// Task routes
app.use('/tasks', taskRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
