const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

/**
 * ===============================
 * GET ALL BOOKINGS
 * ===============================
 */
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ eventDate: 1 });
    res.status(200).json(bookings);
  } catch (err) {
    console.error("Fetch bookings error:", err);
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

/**
 * ===============================
 * GET SINGLE BOOKING (Details)
 * ===============================
 */
router.get("/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ error: "Booking not found" });

    res.status(200).json(booking);
  } catch (err) {
    console.error("Fetch booking error:", err);
    res.status(500).json({ error: "Failed to fetch booking" });
  }
});

/**
 * ===============================
 * CREATE NEW BOOKING
 * ===============================
 */
router.post("/", async (req, res) => {
  try {
    const { partnerName, email, phone, eventType, eventDate, vendorList } = req.body;

    if (!email || !phone || !eventType || !eventDate || !vendorList?.length) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Email validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) return res.status(400).json({ error: "Invalid email format" });

    const booking = new Booking({
      partnerName: partnerName || "",
      email,
      phone,
      eventType,
      eventDate: new Date(eventDate),
      vendorList: vendorList.map((v) => ({
        vendorId: v.vendorId,
        vendorName: v.vendorName,
        status: "Pending", // default status
      })),
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    console.error("Booking error:", err);
    res.status(500).json({ error: "Failed to create booking" });
  }
});

/**
 * ===============================
 * UPDATE VENDOR STATUS
 * ===============================
 */
router.patch("/:id/vendor/:vendorId/status", async (req, res) => {
  try {
    const { status } = req.body;
    const { id, vendorId } = req.params;

    const allowedStatuses = ["Pending", "Approved", "In Progress", "Declined"];
    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

    const booking = await Booking.findById(id);
    if (!booking) return res.status(404).json({ error: "Booking not found" });

    const vendor = booking.vendorList.find((v) => v.vendorId.toString() === vendorId);
    if (!vendor) return res.status(404).json({ error: "Vendor not found" });

    vendor.status = status;
    await booking.save();

    res.status(200).json(booking);
  } catch (err) {
    console.error("Vendor status update failed:", err);
    res.status(500).json({ error: "Failed to update vendor status" });
  }
});

module.exports = router;