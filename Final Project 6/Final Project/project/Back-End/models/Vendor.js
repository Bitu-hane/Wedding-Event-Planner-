// const mongoose = require('mongoose');

// const vendorSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   type: {
//     type: String,
//     required: true,
//     enum: [
//       'Hotels/Halls',
//       'Foods/Catering/Cake',
//       'Makeup/Spa',
//       'Car Rental',
//       'Decoration',
//       'Photographer/DJ',
//     ],
//   },
//   images: {
//     type: [String], 
//     default: [],
//   },
//   link: {
//     type: String,
//     trim: true,
//     default: '',
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   guests: {
//     type: Number,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = mongoose.model('Vendor', vendorSchema);












const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    enum: [
      'Hotels/Halls',
      'Foods/Catering/Cake',
      'Makeup/Spa',
      'Car Rental',
      'Decoration',
      'Photographer/DJ',
    ],
  },
  images: {
    type: [String], 
    default: [],
  },
  link: {
    type: String,
    trim: true,
    default: '',
  },
  price: {
    type: Number,
    required: true,
  },
  guests: {
    type: Number,
  },
  shortDescription: {    // <-- new field for promo text
    type: String,
    trim: true,
    default: '',
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Vendor', vendorSchema);