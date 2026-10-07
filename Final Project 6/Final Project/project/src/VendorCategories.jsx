import React, { useState } from "react";
import ManageVendor from "./ManageVendor";
import "./VendorCategories.css";
import cake from "./assets/Cake.jpeg"; 
import venue from "./assets/venue.jpg";
import makeup from "./assets/makeup.jpg";
import pg from "./assets/pg.jpg";
import car from "./assets/car.jpg";
import decor from "./assets/decor.jpg";

const vendorTypes = [
  {
    type: "Hotels/Halls",
    image: venue,
    description: "Luxury halls and venues for your perfect day"
  },
  {
    type: "Foods/Catering/Cake",
    image: cake,
    description: "Traditional Ethiopian cuisine and custom cakes"
  },
  {
    type: "Makeup/Spa",
    image:makeup ,
    description: "Professional bridal makeup and beauty services"
  },
  {
    type: "Car Rental",
    image: car,
    description: "Luxury decorated cars for the wedding party"
  },
  {
    type: "Decoration",
    image: decor,
    description: "Floral, stage, and traditional decor"
  },
  {
    type: "Photographer/DJ",
    image: pg,
    description: "Capture memories and keep the party going"
  },
];

const VendorCategories = () => {
  const [selectedType, setSelectedType] = useState(null);

  if (selectedType) {
    return (
      <div className="vendor-detail-view">
        <button className="back-btn" onClick={() => setSelectedType(null)}>
          ← Back to Categories
        </button>
        <ManageVendor selectedType={selectedType} />
      </div>
    );
  }

  return (
    <div className="categories-app">
      <div className="categories-container">
        <h1 className="categories-title">Choose Vendor Category</h1>
        <div className="categories-grid">
          {vendorTypes.map((cat) => (
            <div
              key={cat.type}
              className="category-card"
              onClick={() => setSelectedType(cat.type)}
            >
              <div className="category-icon">
                <img
                  src={cat.image}
                  alt={cat.type}
                  style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }}
                />
              </div>
              <h3>{cat.type}</h3>
              <p>{cat.description}</p>
              <span className="view-btn">View Vendors →</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorCategories;