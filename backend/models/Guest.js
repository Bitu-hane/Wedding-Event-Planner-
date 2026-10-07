const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  rsvpStatus: { 
    type: String, 
    enum: ['Attending', 'Declined', 'Pending'], 
    default: 'Pending' 
  },
  mealPreference: { type: String, default: 'Standard' },
  plusOne: { type: Boolean, default: false },
  plusOneName: { type: String, default: '' },
  tableNumber: { type: Number, default: 0 },
  dietaryRestrictions: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Guest', guestSchema);
