const Budget = require('../models/Budget');

let memoryBudget = [
  { id: '1', category: 'Venue & Chateau', item: 'Grand Ballroom Deposit', estimatedCost: 12000, actualCost: 11500, paidAmount: 5000, status: 'Partial' },
  { id: '2', category: 'Photography & Film', item: 'Full-Day Cinematic Package', estimatedCost: 4500, actualCost: 4500, paidAmount: 4500, status: 'Paid' },
  { id: '3', category: 'Floral & Decor', item: 'Arch & Table Centerpieces', estimatedCost: 3800, actualCost: 4000, paidAmount: 1500, status: 'Partial' },
  { id: '4', category: 'Catering & Open Bar', item: '5-Course Gourmet Dinner', estimatedCost: 9500, actualCost: 9800, paidAmount: 2000, status: 'Pending' }
];

exports.getBudget = async (req, res) => {
  try {
    const items = await Budget.find();
    res.json(items.length ? items : memoryBudget);
  } catch (error) {
    res.json(memoryBudget);
  }
};

exports.addBudgetItem = async (req, res) => {
  try {
    const newItem = new Budget(req.body);
    const saved = await newItem.save();
    res.status(201).json(saved);
  } catch (error) {
    const fallback = { id: Date.now().toString(), ...req.body };
    memoryBudget.push(fallback);
    res.status(201).json(fallback);
  }
};

exports.updateBudgetItem = async (req, res) => {
  try {
    const updated = await Budget.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    memoryBudget = memoryBudget.map(b => b.id === req.params.id ? { ...b, ...req.body } : b);
    res.json(req.body);
  }
};

exports.deleteBudgetItem = async (req, res) => {
  try {
    await Budget.findByIdAndDelete(req.params.id);
    res.json({ message: 'Budget item removed' });
  } catch (error) {
    memoryBudget = memoryBudget.filter(b => b.id !== req.params.id);
    res.json({ message: 'Budget item removed' });
  }
};
