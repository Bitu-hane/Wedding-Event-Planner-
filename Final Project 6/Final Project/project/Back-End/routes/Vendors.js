const express = require("express");
const router = express.Router();
const Vendor = require("../models/Vendor");

/* ================= CREATE ================= */
router.post("/", async (req, res) => {
  try {
    const {
      name,
      type,
      description,
      shortDescription,
      price,
      guests,
      link,
      images,
    } = req.body;

    if (!name || !price || !description || !images?.length) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const vendor = new Vendor({
      name,
      type,
      description,
      shortDescription,
      price,
      guests,
      link,
      images,
    });

    await vendor.save();
    res.status(201).json(vendor);
  } catch (err) {
    console.error("Vendor save error:", err);
    res.status(500).json({ error: err.message });
  }
});

/* ================= READ ================= */
router.get("/", async (req, res) => {
  try {
    const vendors = await Vendor.find().sort({ createdAt: -1 });
    res.json(vendors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ================= UPDATE ================= */
router.put("/:id", async (req, res) => {
  try {
    const updated = await Vendor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ================= DELETE ================= */
router.delete("/:id", async (req, res) => {
  try {
    await Vendor.findByIdAndDelete(req.params.id);
    res.json({ message: "Vendor deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
