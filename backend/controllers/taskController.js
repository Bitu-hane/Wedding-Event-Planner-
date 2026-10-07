const Task = require('../models/Task');

let memoryTasks = [
  { id: '1', title: 'Book Wedding Venue', category: 'Venue', dueDate: new Date(Date.now() + 10*24*60*60*1000), completed: true, priority: 'High', assignedTo: 'Alexander' },
  { id: '2', title: 'Confirm Catering Menu & Tasting', category: 'Catering', dueDate: new Date(Date.now() + 25*24*60*60*1000), completed: false, priority: 'High', assignedTo: 'Sarah' },
  { id: '3', title: 'Finalize Flower Arrangements', category: 'Decor', dueDate: new Date(Date.now() + 40*24*60*60*1000), completed: false, priority: 'Medium', assignedTo: 'Sarah' }
];

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks.length ? tasks : memoryTasks);
  } catch (error) {
    res.json(memoryTasks);
  }
};

exports.createTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const saved = await newTask.save();
    res.status(201).json(saved);
  } catch (error) {
    const fallback = { id: Date.now().toString(), ...req.body };
    memoryTasks.push(fallback);
    res.status(201).json(fallback);
  }
};

exports.updateTask = async (req, res) => {
  try {
    const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    memoryTasks = memoryTasks.map(t => t.id === req.params.id ? { ...t, ...req.body } : t);
    res.json(req.body);
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task removed' });
  } catch (error) {
    memoryTasks = memoryTasks.filter(t => t.id !== req.params.id);
    res.json({ message: 'Task removed' });
  }
};
