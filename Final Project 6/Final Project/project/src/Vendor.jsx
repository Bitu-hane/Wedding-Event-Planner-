import React from "react";
import { useNavigate } from "react-router-dom"; // for navigation
import "./Vendor.css";
import hotel from "./assets/hotel.jpg";
import catering from "./assets/catering.jpg";
import photo from "./assets/Cake.jpeg";
import makeup from "./assets/makeup.jpg";
import car from "./assets/car.jpg";
import decor from "./assets/decor.jpg";
import bride from "./assets/bride.jpg";

const vendors = [
  { id: 1, name: "Hotels", image: hotel, route: "/Halls" },
  { id: 2, name: "Catering", image: catering, route: "/Catering" },
  { id: 3, name: "Cake", image: photo, route: "/cake" },
  { id: 4, name: "Makeup & Spa", image: makeup, route: "/makeup" },
  { id: 5, name: "Car Rentals", image: car, route: "/car-rentals" },
  { id: 6, name: "Decoration", image: decor, route: "/decoration" },
];

// ------------------------------
// VENDOR CARDS COMPONENT
// ------------------------------
function VendorCards() {
  const navigate = useNavigate(); // React Router navigation hook

  return (
    <section className="vendor-cards-section">
      <div className="vendor-cards-wrapper">
        <div className="vendor-title-container">
          <h2 className="vendor-main-title">Explore our Vendors</h2>
          <p className="vendor-subtitle">
            Handpicked professionals to make your dream wedding perfect
          </p>
        </div>

        <div className="vendor-cards-container">
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="vendor-card"
              onClick={() => navigate(vendor.route)}
              style={{ cursor: "pointer" }}
            >
              <div className="vendor-image-wrapper">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="vendor-image"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x400/fafaf8/2d5f3f?text=${vendor.name}`;
                  }}
                />
              </div>
              <div className="vendor-info">
                <h3>{vendor.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ------------------------------
// VENDOR STORY COMPONENT
// ------------------------------
function VendorStory() {
  return (
    <section className="vendor-story">
      <div className="vendor-container">
        <div className="vendor-grid">
          {/* LEFT IMAGE */}
          <div className="vendor-image">
            <img src={bride} alt="Bride" className="bride-img" />
          </div>

          {/* RIGHT TEXT */}
          <div className="vendor-content">
            <h2>Our Commitment to You</h2>

            <p className="vendor-paragraph">
              We are devoted to crafting and coordinating outstanding weddings
              for each of our clients, aiming to make their entire wedding
              journey enjoyable, captivating, and stress-free. Our role is to
              assist with every detail of the wedding planning process and
              ensure the event progresses without any hitches.
            </p>

            <p className="vendor-paragraph">
              Moreover, we provide tailored guidance and support to handle any
              unexpected issues, ensuring that your vision is brought to life
              flawlessly. From the initial planning stages to the final touches
              on your special day, our team is dedicated to creating a
              remarkable and delightful experience for you and your guests.
            </p>

            <a href="/contact" className="booknow-link">
              <button className="booknow-btn">BOOK NOW</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ------------------------------
// COMBINED EXPORT
// ------------------------------
export default function VendorPage() {
  return (
    <>
      <VendorCards />
      <VendorStory />
    </>
  );
}