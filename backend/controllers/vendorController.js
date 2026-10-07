const Vendor = require('../models/Vendor');

let memoryVendors = [
  { id: '1', name: 'Lumière Photography Studio', category: 'Photography', contactPerson: 'Claire Dupont', phone: '+33 6 12 34 56 78', email: 'contact@lumierephoto.fr', estimatedPrice: 4500, status: 'Booked', notes: 'Includes drone footage and engagement shoot.' },
  { id: '2', name: 'Maison de la Fleur', category: 'Florist', contactPerson: 'Antoine Laurent', phone: '+33 6 98 76 54 32', email: 'info@maisonfleur.fr', estimatedPrice: 4000, status: 'Booked', notes: 'White roses and blush peonies palette.' },
  { id: '3', name: 'Harmony String Quartet', category: 'Music & DJ', contactPerson: 'Elena Rossi', phone: '+33 6 55 44 33 22', email: 'booking@harmonystring.com', estimatedPrice: 2200, status: 'In Talks', notes: 'Ceremony acoustic set + cocktail hour.' }
];

exports.getVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.json(vendors.length ? vendors : memoryVendors);
  } catch (error) {
    res.json(memoryVendors);
  }
};

exports.createVendor = async (req, res) => {
  try {
    const newVendor = new Vendor(req.body);
    const saved = await newVendor.save();
    res.status(201).json(saved);
  } catch (error) {
    const fallback = { id: Date.now().toString(), ...req.body };
    memoryVendors.push(fallback);
    res.status(201).json(fallback);
  }
};

exports.updateVendor = async (req, res) => {
  try {
    const updated = await Vendor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    memoryVendors = memoryVendors.map(v => v.id === req.params.id ? { ...v, ...req.body } : v);
    res.json(req.body);
  }
};

exports.deleteVendor = async (req, res) => {
  try {
    await Vendor.findByIdAndDelete(req.params.id);
    res.json({ message: 'Vendor removed' });
  } catch (error) {
    memoryVendors = memoryVendors.filter(v => v.id !== req.params.id);
    res.json({ message: 'Vendor removed' });
  }
};
