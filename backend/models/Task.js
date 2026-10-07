const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, default: 'General' },
  dueDate: { type: Date },
  completed: { type: Boolean, default: false },
  priority: { type: String, enum: ['High', 'Medium', 'Low'], default: 'Medium' },
  assignedTo: { type: String, default: 'Bride & Groom' }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
