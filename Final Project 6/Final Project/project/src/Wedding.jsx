import React, { useState, useEffect } from "react"
import "./Wedding.css"
import gold from './assets/gold.jpg';

export default function Wedding() {
  const services = ["FULL-SERVICE", "PARTIAL-SERVICE", "A DAY-OF"]
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-rotate every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="wedding-page">

      {/* HERO WITH ANIMATED TITLE */}
      <header className="wedding-hero">
        <div className="hero-image">
          <img
            src={gold}
            alt="Luxury gold wedding rings"
            className="hero-img"
            onError={(e) => e.target.src = "https://via.placeholder.com/1920x1080/f5e6cc/2d5f3f?text=♡+Eternal+Vows"}
          />
          
        </div>
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="animated-title">
            <span key={currentIndex} className="service-text">
              {services[currentIndex]}
            </span>
            <span className="separator"> | </span>
           <span className="fixed-text">Wedding planning</span>
          </h1>
        </div>
      </header>

      {/* SERVICE BOXES – WHITE */}
      <section className="services-section">
        <div className="services-container">

          <div className="service-box">
            <div className="service-letter">F</div>
            <h3>Full-service wedding planning</h3>
            <p>
              Let us handle every detail of your special day, from venue selection to floral arrangements, 
              ensuring a stress-free and memorable celebration. Our expert team will bring your dream 
              wedding to life, leaving you to savor every moment.
            </p>
          </div>

          <div className="service-box">
            <div className="service-letter">P</div>
            <h3>Partial-service wedding planning</h3>
            <p>
              Our partial-service wedding planning offers couples a flexible and customized approach 
              to wedding coordination. Tailored to meet specific needs. We will allow you to retain 
              control over certain aspects of your wedding while benefiting from professional assistance 
              in key areas.
            </p>
          </div>

          <div className="service-box">
            <div className="service-letter">D</div>
            <h3>A day-of wedding coordination</h3>
            <p>
              Our Day-of Wedding Coordination service ensures that your special day runs seamlessly. 
              Our experienced coordinators step in on the day of your wedding to manage all the details, 
              allowing you to focus on the joy of the moment. From coordinating vendors to overseeing 
              the timeline, we handle it all, ensuring your celebration unfolds effortlessly.
            </p>
          </div>

        </div>
      </section>

      {/* PRICING – LEMON GREEN */}
      <section className="pricing-section">
        <div className="pricing-container">
          <h2>Pricing</h2>
          <p className="pricing-intro">
            Pricing for our wedding planning services is not fixed and can vary based on several key factors 
            that tailor the experience to your unique needs and preferences. These factors include:
          </p>

          <ol className="pricing-list">
            <li><strong>Size of the Wedding:</strong> The number of guests, the complexity of the event, and the scale of your wedding play a significant role in determining the price.</li>
            <li><strong>Location:</strong> The geographical location of your wedding is a crucial factor. Costs can differ significantly between urban and rural areas.</li>
            <li><strong>Time of Year:</strong> Popular wedding months and dates may come with higher demand for venues and vendors.</li>
            <li><strong>Day of the Week:</strong> Weekend weddings, especially on Saturdays, are often in higher demand and may come with higher costs.</li>
          </ol>

          <p className="pricing-cta">
            Please <a href="/contact" className="contact-link">contact us</a> to book your 
            <strong> complimentary initial meeting</strong>.
          </p>
        </div>
      </section>

    </div>
  )
}