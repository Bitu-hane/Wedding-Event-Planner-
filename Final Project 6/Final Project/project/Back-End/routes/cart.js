const express = require("express");
const User = require("../models/User");
const Vendor = require("../models/Vendor");
const auth = require("../middleware/auth");

const router = express.Router();

// ADD TO CART
router.post("/add", auth, async (req, res) => {
  try {
    const { vendorId } = req.body;

    if (!vendorId) {
      return res.status(400).json({ message: "vendorId required" });
    }

    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.cart.includes(vendorId)) {
      return res.json({ message: "Already in cart" });
    }

    user.cart.push(vendorId);
    await user.save();

    res.status(201).json({ message: "Added to cart" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET CART ITEMS
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).populate("cart"); // assuming cart is array of vendor IDs

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user.cart); // return the populated vendor objects
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Could not load cart items. Please try again later." });
  }
});

// ✅ REMOVE VENDOR FROM CART
router.delete("/remove/:vendorId", auth, async (req, res) => {
  try {
    const { vendorId } = req.params;

    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Remove vendor from cart array
    user.cart = user.cart.filter((id) => id.toString() !== vendorId);
    await user.save();

    res.status(200).json({ message: "Vendor removed from cart", cart: user.cart });
  } catch (err) {
    console.error(err); 
    res.status(500).json({ message: "Failed to remove vendor from cart" });
  }
});

module.exports = router;
