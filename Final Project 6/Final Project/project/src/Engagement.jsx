// src/pages/Engagement.jsx
import React from "react"
import "./Engagement.css"
import ring from "./assets/ring.png"

export default function Engagement() {
  return (
    <div className="engagement-page">

      {/* HERO HEADER */}
      <header className="engagement-hero">
        <div className="hero-image">
          <img
            src={ring}
            alt="Beautiful engagement ring"
            className="hero-img"
            onError={(e) => e.target.src = "https://via.placeholder.com/1920x1080/f5e6cc/2d5f3f?text=♡+Forever"}
          />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="main-title">One + One = One</h1>
          <p className="sub-titles">Let us create magical moments</p>
        </div>
      </header>

      {/* BODY PART 1 – WHITE */}
      <section className="engagement-content">
        <div className="content-container">
          <p className="engagement-text">
            At EternalVows, we specialize in crafting enchanting and unforgettable engagement gatherings 
            that beautifully capture the essence of your unique love story.
          </p>
          <p className="engagement-text">
            Our seasoned team of event coordinators will thoughtfully arrange every element, ensuring 
            a seamless and joyous celebration for both you and your cherished guests. From stunning venues 
            to exquisite decorations and delightful entertainment, we will breathe life into your vision, 
            creating a day that will be treasured forever.
          </p>
          <p className="engagement-text">
            Whether it's an intimate gathering or a grand soirée, our personalized approach will transform 
            your engagement party into a truly magical experience. 
          </p>
          <p className="engagement-text">
            <strong> Let's embark on this journey together — reach out to EternalVows today to commence 
            planning your dream engagement celebration!</strong>
            </p>
        </div>
      </section>

      {/* BODY PART 2 – BIG QUOTE WITH BACKGROUND IMAGE */}
      <section className="quote-section">
        <div className="quote-overlay"></div>
        <div className="quote-content">
          <h2>Two hearts, one love!</h2>
          <p>A lifetime of togetherness</p>
        </div>
      </section>

    </div>
  )
}