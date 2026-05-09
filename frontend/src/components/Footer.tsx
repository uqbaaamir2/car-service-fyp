import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Door-to-door car service providing quality maintenance and repairs at your convenience.</p>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li>
                <Link to="/services">Car Repair</Link>
              </li>
              <li>
                <Link to="/services">Car Wash</Link>
              </li>
              <li>
                <Link to="/services">Oil Change</Link>
              </li>
              <li>
                <Link to="/services">Inspection</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>📞 +92 300 1234567</p>
            <p>📧 info@carservices.com</p>
            <p>📍 Lahore, Pakistan</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Door-to-Door Car Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
