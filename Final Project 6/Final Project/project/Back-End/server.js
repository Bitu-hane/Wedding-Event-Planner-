require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express(); // ✅ MUST BE FIRST

app.use(cors({ origin: "http://localhost:5173" }));

// ✅ ONLY ONE JSON PARSER — WITH LIMIT
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/vendors", require("./routes/Vendors"));
app.use("/api/cart", require("./routes/cart"));
// AFTER express.json() middleware
app.use("/api/bookings", require("./routes/bookings"));


//app.use("/api/bookings", require("./routes/bookings"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo connected"))
  .catch(console.error);

app.listen(5002, () =>
  console.log("Server running on http://localhost:5002")
);
