import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Halls.css";
import { FiArrowLeft } from "react-icons/fi";

const Halls = () => {
  const [halls, setHalls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openHallId, setOpenHallId] = useState(null); // toggle details

  const API_URL = "http://localhost:5002/api/vendors";

  useEffect(() => {
    fetchHalls();
  }, []);

  const fetchHalls = async () => {
    try {
      const res = await axios.get(API_URL);

      // ONLY halls
      const filtered = res.data.filter(
        (v) => v.type === "Hotels/Halls"
      );

      setHalls(filtered);
    } catch (err) {
      console.error("Error fetching halls:", err);
      alert("Failed to load halls");
    } finally {
      setLoading(false);
    }
  };

  const toggleDetails = (id) => {
    setOpenHallId(openHallId === id ? null : id);
  };

  return (
    <div className="hotels-page">
      <header className="hotels-header">
        <h1>Hotels & Halls</h1>
        <a href="/VendorPage" className="back-link">
          <FiArrowLeft /> Back to Vendors
        </a>
      </header>

      {loading ? (
        <p className="loading">Loading halls...</p>
      ) : halls.length === 0 ? (
        <p className="empty">No hotels or halls found.</p>
      ) : (
        <div className="hotels-grid">
          {halls.map((hall) => (
            <div key={hall._id} className="hotel-card">

              {/* 🔹 IMAGE GALLERY */}
              <div className="hotel-images">
                {hall.images && hall.images.length > 0 ? (
                  hall.images.map((img, index) => (
                    <img
                      key={index}
        src={img}                     // ✅ FIX
                      alt={`${hall.name} ${index + 1}`}
                      className="hotel-img"
                    />
                  ))
                ) : (
                  <div className="placeholder-img">No Image</div>
                )}
              </div>

              {/* 🔹 BASIC INFO */}
              <div className="hotel-info">
                <h3>{hall.name}</h3>

                {hall.guests && (
                  <p><strong>Guests:</strong> {hall.guests}</p>
                )}

                <p className="price">
                  <strong>Price:</strong> ETB {hall.price}
                </p>

                {/* 🔹 VIEW DETAILS BUTTON */}
                <button
                  className="details-btn"
                  onClick={() => toggleDetails(hall._id)}
                >
                  {openHallId === hall._id ? "Hide Details" : "View Details"}
                </button>

                {/* 🔹 FULL DESCRIPTION */}
                {openHallId === hall._id && (
                  <div className="hall-details">
                    <p>{hall.description}</p>

                    {hall.link && (
                      <a
                        href={hall.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hotel-link"
                      >
                        Visit Website
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Halls;