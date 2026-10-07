import React from "react"
import "./AboutContent.css"

export default function AboutContent() {
  return (
    <div className="about-page">

      {/* HERO BANNER */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>We create exceptional celebrations and flawless weddings!</h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="about-section">
        <div className="about-container">
          <h2>What Exactly do we do?</h2>

          <div className="about-block">
            <h3>Welcome to EternalVows</h3>
            <p className="lead">Where Dreams Unveil Their Happily Ever Afters!</p>
            <p>
              At EternalVows, we're more than just wedding planners; we're your trusted partners in crafting the perfect love story. 
              With years of experience and a passion for wedding planning, we specialize in turning your wedding dreams into reality.
            </p>
            <p>
              Our dedicated team of experts is here to guide you through every step of your journey, from selecting enchanting venues 
              to curating exquisite decor and coordinating seamless ceremonies. We understand that every love story is unique, 
              which is why we pride ourselves on creating tailored experiences that reflect your personality and style.
            </p>
            <p>
              With EternalVows, your special day becomes an unforgettable celebration of love, filled with joy, laughter, and cherished moments. 
              Let's embark on this beautiful adventure together!
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="about-mission" id="mission-section">
        <div className="about-container">
          <h2>Our Mission</h2>
          <p>
            To transform your wedding vision into reality with creativity, attention to detail, and unwavering dedication to excellence.
          </p>
          <p>
            We are committed to delivering personalized solutions that exceed expectations and create lasting memories for you and your loved ones. 
            Every event is treated with the utmost care and professionalism, ensuring seamless execution from planning to celebration.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-section">
        <div className="about-container">
          <h2>Our Values</h2>
          <p>
            We believe in personalized service, innovative solutions, and building lasting relationships with our clients. Your satisfaction is our success.
          </p>
          <p>
            We value integrity, creativity, and transparency in all our endeavors. Our commitment to excellence means we go above and beyond 
            to ensure every detail reflects your vision and dreams. We foster a culture of continuous improvement and customer-centric solutions.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className="about-team">
        <div className="about-container">
          <h2>Our Team</h2>
          <p>
            Our experienced coordinators and specialists work tirelessly to ensure every aspect of your event is flawlessly executed and exceeds expectations.
          </p>
          <p>
            Our diverse team brings together years of expertise in event planning, design, coordination, and hospitality. 
            We are passionate about what we do and take pride in our work. Each team member is dedicated to providing exceptional service 
            and creating magical moments for our clients.
          </p>
        </div>
      </section>

    </div>
  )
}