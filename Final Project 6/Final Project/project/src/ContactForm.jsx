import React, { useState } from "react"
import "./ContactForm.css"   
import gringImg from './assets/grassring.jpg';                     

export default function Contact() {
  const [formData, setFormData] = useState({
    yourName: "",
    partnerName: "",
    phone: "",
    email: "",
    eventType: "",
    eventStyle: "",
    weddingDate: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you! We'll contact you soon.")
  }

  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* Header Text */}
        <div className="contact-header">
          <h1>CONTACT US</h1>
          <p>We would really love to hear from you! Please contact us directly by filling the following form.</p>
        </div>

        {/* Grid: Form Left | Image Right */}
        <div className="contact-grid">
          
          {/* LEFT: Form */}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-grid">
              
              {/* First Row */}
              <div className="form-group">
                <label>Your Name <span className="required">*</span></label>
                <input type="text" name="yourName" value={formData.yourName} onChange={handleChange} required placeholder="Enter your name" />
              </div>

              <div className="form-group">
                <label>Your Partner's Name</label>
                <input type="text" name="partnerName" value={formData.partnerName} onChange={handleChange} placeholder="Enter your partner's name" />
              </div>

              {/* Second Row */}
              <div className="form-group">
                <label>Phone <span className="required">*</span></label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Your phone number" />
              </div>

              <div className="form-group">
                <label>Email <span className="required">*</span></label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" />
              </div>

              {/* Third Row */}
              <div className="form-group">
                <label>Event Type</label>
                <select name="eventType" value={formData.eventType} onChange={handleChange}>
                  <option value="">Select event type</option>
                  <option>Wedding</option>
                  <option>Engagement</option>
                  <option>Bridal Shower</option>
                  <option>Anniversary</option>
                </select>
              </div>

              <div className="form-group">
                <label>Event Style</label>
                <select name="eventStyle" value={formData.eventStyle} onChange={handleChange}>
                  <option value="">Choose your style</option>
                  <option>Luxury</option>
                  <option>Modern</option>
                  <option>Natural</option>
                  <option>Minimalist</option>
                  <option>Traditional</option>
                  <option>Anything you think is good</option>
                  <option>Don't know yet</option>
                </select>
              </div>

              {/* Fourth Row - Single item spanning full width */}
              <div className="form-group full-width">
                <label>Wedding Date</label>
                <input type="date" name="weddingDate" value={formData.weddingDate} onChange={handleChange} />
              </div>

              {/* Fifth Row - Single item spanning full width */}
              <div className="form-group full-width">
                <label>Tell us more about your dream day</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Share your vision, guest count, venue ideas..."
                />
              </div>
            </div>

            <div className="submit-btn-container">
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </div>
          </form>

          {/* RIGHT: Image */}
          <div className="contact-image">
            {
             <img src={gringImg} alt="Rings" className="rings-img" />
             
            }

          </div>
        </div>
      </div>
    </section>
  )
}