import { Mail, Phone, MapPin } from "lucide-react"
import "./Footer.css"
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <ul>
              <li>
                <Link to="/AboutContent" className="nav-link">Our Story</Link>
              </li>
              <li>
                 <Link to="/FAQs" className="nav-link">FAQs</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>
              <Link to="/Wedding" className="nav-link">Wedding Planning</Link>
              </li>
              <li>
              <Link to="/Engagement" className="nav-link">Engagement Events</Link>
              </li>
              <li>
                <Link to="/BridalShower" className="nav-link">Bridal Showers</Link>
              </li>
              <li>
                <Link to="/Anniversary" className="nav-link">Anniversary Events</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-info">
              <p>
                <Phone size={16} /> +251 942 009 553
              </p>
              <p>
                <Mail size={16} /> hello@EternalVows.com
              </p>
              <p>
                <MapPin size={16} /> Addis Ababa, Ethiopia
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} EternalVows. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
