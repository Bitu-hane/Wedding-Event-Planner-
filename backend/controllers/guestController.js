const Guest = require('../models/Guest');

// In-memory fallback if DB is not connected
let memoryGuests = [
  { id: '1', name: 'Eleanor Vance', email: 'eleanor@example.com', phone: '+1 555-0192', rsvpStatus: 'Attending', mealPreference: 'Vegetarian', plusOne: true, plusOneName: 'Julian Black', tableNumber: 3, dietaryRestrictions: 'Gluten-Free' },
  { id: '2', name: 'Marcus Sterling', email: 'marcus@example.com', phone: '+1 555-0144', rsvpStatus: 'Attending', mealPreference: 'Prime Rib', plusOne: false, plusOneName: '', tableNumber: 1, dietaryRestrictions: 'None' },
  { id: '3', name: 'Sophia Chen', email: 'sophia@example.com', phone: '+1 555-0188', rsvpStatus: 'Pending', mealPreference: 'Standard', plusOne: true, plusOneName: 'David Lee', tableNumber: 2, dietaryRestrictions: 'Nut Allergy' }
];

exports.getGuests = async (req, res) => {
  try {
    const guests = await Guest.find();
    res.json(guests.length ? guests : memoryGuests);
  } catch (error) {
    res.json(memoryGuests);
  }
};

exports.createGuest = async (req, res) => {
  try {
    const newGuest = new Guest(req.body);
    const saved = await newGuest.save();
    res.status(201).json(saved);
  } catch (error) {
    const fallback = { id: Date.now().toString(), ...req.body };
    memoryGuests.push(fallback);
    res.status(201).json(fallback);
  }
};

exports.updateGuest = async (req, res) => {
  try {
    const updated = await Guest.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    memoryGuests = memoryGuests.map(g => g.id === req.params.id ? { ...g, ...req.body } : g);
    res.json(req.body);
  }
};

exports.deleteGuest = async (req, res) => {
  try {
    await Guest.findByIdAndDelete(req.params.id);
    res.json({ message: 'Guest removed successfully' });
  } catch (error) {
    memoryGuests = memoryGuests.filter(g => g.id !== req.params.id);
    res.json({ message: 'Guest removed successfully (memory)' });
  }
};
