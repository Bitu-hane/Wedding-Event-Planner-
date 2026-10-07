const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  coupleNames: { type: String, default: 'Sarah & Alexander' },
  weddingDate: { type: Date, default: () => new Date(Date.now() + 180 * 24 * 60 * 60 * 1000) },
  venue: { type: String, default: 'The Grand Chateau & Gardens' },
  city: { type: String, default: 'Paris, France' },
  budgetGoal: { type: Number, default: 35000 },
  theme: { type: String, default: 'Romantic Luxury Gold' }
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
