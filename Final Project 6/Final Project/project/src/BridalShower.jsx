import React from "react"
import "./BridalShower.css"
import bs from "./assets/bs.jpg"
import baby from "./assets/baby.jpg"

export default function BridalShower() {
  return (
    <div className="bridalshower-page">

      {/* HERO HEADER */}
      <header className="bridalshower-hero">
        <div className="hero-image">
          <img
            src={bs}
            alt="Elegant engagement ring"
            className="hero-img"
            onError={(e) => e.target.src = "https://via.placeholder.com/1920x1080/f5e6cc/2d5f3f?text=Bridal+Shower"}
          />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="main-title">Make Her Bridal Shower Unforgettable!</h1>
          <p className="sub-title">
            Looking to host the perfect bridal shower for your beloved bride-to-be?<br />
            Look no further!
          </p>
        </div>
      </header>

      {/* BODY – TEXT LEFT, IMAGE RIGHT */}
      <section className="bridalshower-content">
        <div className="content-grid">

          {/* LEFT: TEXT */}
          <div className="text-side">
            <h2>Creating Unforgettable Bridal Showers.</h2>
            <p className="bridal-text">
              From the moment you envision your dream event, our dedicated team works tirelessly 
              to bring your vision to life. With meticulous attention to detail and a passion for 
              perfection, we craft personalized themes, elegant decor, and engaging activities that 
              reflect the bride's unique style and personality.
            </p>
            <p className="bridal-text">
              Whether you desire an intimate gathering or a grand celebration, our experienced planners 
              tailor each event to suit your preferences and budget. We understand that every bridal 
              shower is a momentous occasion, and our goal is to ensure that you and your guests have 
              a truly delightful and stress-free experience.
            </p>
            <p className="bridal-text highlight">
              Let <strong>EternalVows</strong> turn your bridal shower dreams into reality. 
              With our expertise and creativity, you can relax and cherish every moment, creating 
              beautiful memories with your loved ones. 
              <strong> Reach Out today</strong> to embark on a journey to a picture-perfect 
              bridal shower celebration!
            </p>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="image-side">
            <img
              src={baby}
              alt="Happy bridal shower celebration"
              className="bridal-image"
              onError={(e) => e.target.src = "https://via.placeholder.com/800x1000/fafaf8/2d5f3f?text=Love+Laughter"}
            />
          </div>

        </div>
      </section>

    </div>
  )
}