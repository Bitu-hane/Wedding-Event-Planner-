import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./BookingDetail.css";

const BookingDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { vendors } = location.state || [];

  const user = JSON.parse(localStorage.getItem("user")) || {};
  const userEmail = user.email || "";

  if (!vendors || vendors.length === 0) {
    return (
      <div className="booking-page">
        <div className="booking-card">
          <h2>Invalid Booking</h2>
          <p>Please go back and select vendors again.</p>
        </div>
      </div>
    );
  }

  const [formData, setFormData] = useState({
    eventType: "",
    eventDate: "",
    phone: "",
    partnerName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.eventType || !formData.eventDate || !formData.phone) {
      alert("Please fill all required fields");
      return;
    }

    if (formData.eventType !== "Bridal Shower" && !formData.partnerName.trim()) {
      alert("Partner name is required");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      // Create the payload for backend
      const payload = {
        partnerName: formData.partnerName || "",
        email: userEmail,
        phone: formData.phone,
        eventType: formData.eventType,
        eventDate: formData.eventDate,
        vendorList: vendors.map((v) => ({
          vendorId: v._id,
          vendorName: v.name,
        })),
      };

      await axios.post("http://localhost:5002/api/bookings", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Booking successful!");
      navigate("/");
    } catch (err) {
      console.error("Booking failed:", err.response || err.message);
      alert("Booking failed. Check console for details.");
    }
  };

  return (
    <div className="booking-page">
      <div className="booking-card">
        <h1>Book Your Selected Vendors</h1>
        <ul className="vendor-list">
          {vendors.map((v) => (
            <li key={v._id}>{v.name}</li>
          ))}
        </ul>

        <form onSubmit={handleSubmit} className="booking-form">
          <label>
            Event Type
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              required
            >
              <option value="">Select Event</option>
              <option>Engagement</option>
              <option>Wedding</option>
              <option>Anniversary</option>
              <option>Bridal Shower</option>
            </select>
          </label>

          <label>
            Event Date
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>

          {formData.eventType !== "Bridal Shower" && (
            <label>
              Partner Name
              <input
                type="text"
                name="partnerName"
                value={formData.partnerName}
                onChange={handleChange}
                required
              />
            </label>
          )}

          <button type="submit" className="booking-submit">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingDetail;