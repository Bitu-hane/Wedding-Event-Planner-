const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  contactPerson: { type: String, default: '' },
  phone: { type: String, default: '' },
  email: { type: String, default: '' },
  estimatedPrice: { type: Number, default: 0 },
  status: { type: String, enum: ['Booked', 'In Talks', 'Researching'], default: 'Researching' },
  notes: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Vendor', vendorSchema);
