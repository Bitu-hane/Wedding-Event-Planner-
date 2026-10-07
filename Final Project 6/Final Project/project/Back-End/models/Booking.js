const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  vendorId: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor", required: true },
  vendorName: { type: String, required: true },
  status: {
    type: String,
    enum: ["Pending", "Approved", "In Progress", "Declined"],
    default: "Pending",
  },
});

const bookingSchema = new mongoose.Schema({
  partnerName: { type: String, default: "" },
  email: { type: String, required: true, trim: true, lowercase: true },
  phone: { type: String, required: true },
  eventType: { type: String, required: true },
  eventDate: { type: Date, required: true },
  vendorList: [vendorSchema], // array of vendors
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", bookingSchema);