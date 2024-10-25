const fs = require('fs');
const path = './tasks.json';

let tasks = [];

// Load tasks from file if it exists
const loadTasks = () => {
  if (fs.existsSync(path)) {
    const data = fs.readFileSync(path, 'utf-8');
    tasks = JSON.parse(data);
  } else {
    tasks = [];
  }
};

// Save tasks to file
const saveTasks = () => {
  fs.writeFileSync(path, JSON.stringify(tasks, null, 2), 'utf-8');
};

// Find task by id
const findTaskById = (id) => tasks.find((task) => task.id === id);

// Load tasks on server start
loadTasks();

module.exports = {
  tasks,
  findTaskById,
  saveTasks,
};
