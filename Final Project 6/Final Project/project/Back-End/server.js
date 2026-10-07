require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT || 5002;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

app.use(cors({
  origin: [CLIENT_URL, "http://localhost:5173"],
  credentials: true
}));

// ✅ ONLY ONE JSON PARSER — WITH LIMIT
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/vendors", require("./routes/Vendors"));
app.use("/api/cart", require("./routes/cart"));
// AFTER express.json() middleware
app.use("/api/bookings", require("./routes/bookings"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo connected"))
  .catch(console.error);

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

