import React, { useState, useEffect } from "react"
import "./Anniversary.css"
import venue from "./assets/venue.jpg";
import couple2 from "./assets/couple2.jpg";
import venue2 from "./assets/venue2.jpg";


export default function Anniversary() {
  const venueImages = [
    venue,
    venue2
  ]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % venueImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="anniversary-page">

      {/* HERO HEADER */}
      <header className="anniversary-hero">
        <div className="hero-image">
          <img
            src={couple2}
            alt="Happy married couple celebrating anniversary"
            className="hero-img"
            onError={(e) => e.target.src = "https://via.placeholder.com/1920x1080/f5e6cc/2d5f3f?text=Forever+Together"}
          />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="main-title">Let Us PLAN YOUR ANNIVERSARY !</h1>
        </div>
      </header>

      {/* BODY PART 1 – CENTERED TEXT */}
      <section className="anniversary-intro">
        <div className="intro-container">
          <h2>Let us plan your anniversary !</h2>
          <p>
            With an unwavering commitment to details and customized elements, we meticulously design 
            one-of-a-kind anniversaries tailored to your preferences and interests. From selecting 
            the perfect venue to creating imaginative themes, arranging catering, and providing 
            entertainment, we oversee every facet of the occasion, guaranteeing a seamless and 
            joyous tribute to cherished memories.
          </p>
          <p className="highlight">
            Allow us to enchantingly plan your anniversary into an <strong>unforgettable and magical affair</strong>.
          </p>
        </div>
      </section>

      {/* BODY PART 2 – 3 SWITCHING IMAGES + TEXT */}
      <section className="venue-section">
        <div className="venue-container">
          <h2>Select your dream venue</h2>
          <p className="venue-subtitle">leave the rest to us !</p>

          {/* SWITCHING IMAGES */}
          <div className="venue-slider">
            {venueImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Dream venue ${index + 1}`}
                className={`venue-image ${index === currentImage ? "active" : ""}`}
                onError={(e) => e.target.src = "https://via.placeholder.com/1000x600/fafaf8/2d5f3f?text=Dream+Venue"}
              />
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}