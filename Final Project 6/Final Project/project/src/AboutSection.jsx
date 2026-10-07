import "./AboutSection.css"

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2>About Us</h2>
        <p className="about-intro">
          Elegant Weddings is your premier destination for exceptional event planning. With over 15 years of experience,
          our team is dedicated to creating timeless moments that reflect your unique love story.
        </p>

        <div className="about-content">
          <div className="about-box">
            <h3>Our Mission</h3>
            <p>
              To transform your wedding vision into reality with creativity, attention to detail, and unwavering
              dedication to excellence.
            </p>
          </div>

          <div className="about-box">
            <h3>Our Values</h3>
            <p>
              We believe in personalized service, innovative solutions, and building lasting relationships with our
              clients. Your satisfaction is our success.
            </p>
          </div>

          <div className="about-box">
            <h3>Our Team</h3>
            <p>
              Our experienced coordinators and specialists work tirelessly to ensure every aspect of your event is
              flawlessly executed and exceeds expectations.
            </p>
          </div>
        </div>

        <div className="faqs-section">
          <h3>Frequently Asked Questions</h3>
          <div className="faq-item">
            <h4>How far in advance should I book?</h4>
            <p>
              We recommend booking 8-12 months in advance for optimal venue and vendor availability. However, we
              accommodate rush bookings when possible.
            </p>
          </div>
          <div className="faq-item">
            <h4>What is included in your planning services?</h4>
            <p>
              Our services include venue selection, vendor coordination, design consultation, timeline management, and
              full day-of coordination.
            </p>
          </div>
          <div className="faq-item">
            <h4>Do you work with a specific guest count range?</h4>
            <p>
              We work with events of all sizes, from intimate gatherings of 20 guests to grand celebrations of 500+.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
