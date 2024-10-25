const { findTaskById, tasks, saveTasks } = require('../models/taskModel');

// GET /tasks
const getTasks = (req, res) => {
  res.status(200).json(tasks);
};

// POST /tasks
const addTask = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    completed: false,
  };

  tasks.push(newTask);
  saveTasks();  // If using JSON file persistence
  res.status(201).json(newTask);
};

// PUT /tasks/:id
const updateTask = (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const task = findTaskById(Number(id));
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  if (title) task.title = title;
  if (typeof completed === 'boolean') task.completed = completed;

  saveTasks();  // If using JSON file persistence
  res.status(200).json(task);
};

// DELETE /tasks/:id
const deleteTask = (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex((task) => task.id === Number(id));

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks.splice(taskIndex, 1);
  saveTasks();  // If using JSON file persistence
  res.status(200).json({ message: 'Task deleted successfully' });
};

module.exports = {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
};
