import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Catering.css";
import { FiArrowLeft } from "react-icons/fi";

const Catering = () => {
  const [catering, setCatering] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openCateringId, setOpenCateringId] = useState(null);

  const API_URL = "http://localhost:5000/api/bookings"; // <-- your Booking API

  useEffect(() => {
    fetchCatering();
  }, []);

  const fetchCatering = async () => {
    try {
      const res = await axios.get(API_URL);

      // Extract only vendors with type "Catering" from all bookings
      const cateringVendors = res.data
        .flatMap((booking) => 
          booking.vendorList
            .filter((vendor) =>
              vendor.vendorName.toLowerCase().includes("catering")
            )
            .map((vendor) => ({
              ...vendor,
              bookingId: booking._id,
              partnerName: booking.partnerName,
              eventDate: booking.eventDate,
            }))
        );

      setCatering(cateringVendors);
    } catch (err) {
      console.error("Error fetching catering:", err);
      alert("Failed to load catering vendors");
    } finally {
      setLoading(false);
    }
  };

  const toggleDetails = (id) => {
    setOpenCateringId(openCateringId === id ? null : id);
  };

  return (
    <div className="hotels-page">
      {/* Header */}
      <header className="hotels-header">
        <h1>Catering Services</h1>
        <a href="/VendorPage" className="back-link">
          <FiArrowLeft /> Back to Vendors
        </a>
      </header>

      {/* Loading / Empty / Data */}
      {loading ? (
        <p className="loading">Loading catering services...</p>
      ) : catering.length === 0 ? (
        <p className="empty">No Catering vendors found.</p>
      ) : (
        <div className="hotels-grid">
          {catering.map((cater) => (
            <div key={cater.vendorId + cater.bookingId} className="hotel-card">
              {/* Image placeholder */}
              <div className="hotel-images">
                {cater.image ? (
                  <img src={cater.image} alt={cater.vendorName} className="hotel-img" />
                ) : (
                  <div className="placeholder-img">No Image</div>
                )}
              </div>

              {/* Info */}
              <div className="hotel-info">
                <h3>{cater.vendorName}</h3>
                <p><strong>Event:</strong> {cater.partnerName}</p>
                <p><strong>Date:</strong> {new Date(cater.eventDate).toLocaleDateString()}</p>

                <button
                  className="details-btn"
                  onClick={() => toggleDetails(cater.vendorId + cater.bookingId)}
                >
                  {openCateringId === cater.vendorId + cater.bookingId ? "Hide Details" : "View Details"}
                </button>

                {openCateringId === cater.vendorId + cater.bookingId && (
                  <div className="catering-details">
                    {cater.description && <p>{cater.description}</p>}
                    {cater.link && (
                      <a href={cater.link} target="_blank" rel="noopener noreferrer" className="hotel-link">
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

export default Catering;
