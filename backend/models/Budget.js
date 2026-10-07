const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  category: { type: String, required: true },
  item: { type: String, required: true },
  estimatedCost: { type: Number, default: 0 },
  actualCost: { type: Number, default: 0 },
  paidAmount: { type: Number, default: 0 },
  status: { type: String, enum: ['Paid', 'Partial', 'Pending'], default: 'Pending' }
}, { timestamps: true });

module.exports = mongoose.model('Budget', budgetSchema);
