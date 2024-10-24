const express = require('express');
const router = express.Router();
const {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasksController');

// Define the routes and bind them to controller functions
router.get('/', getTasks);
router.post('/', addTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
