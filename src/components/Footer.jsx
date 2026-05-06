import { Link } from "react-router-dom";
import citLogo from "../assets/citLOGO.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <div className="footer-logo-section">
            <img src={citLogo} alt="CIT Logo" className="footer-logo" />
            <div>
              <h4>College of Industrial Technology</h4>
              <p>EARIST - Eulogio "Amang" Rodriguez Institute of Science and Technology</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/facilities">Facilities</Link></li>
            <li><Link to="/faculty">Faculty</Link></li>
            <li><Link to="/blog">Blog & Location</Link></li>
            <li><a href="#courses">Courses</a></li>
          </ul>
        </div>

        {/* Programs */}
        <div className="footer-section">
          <h4>Our Programs</h4>
          <ul>
            <li><Link to="/course/Automotive Technology">Automotive Technology</Link></li>
            <li><Link to="/course/Mechanical Technology">Mechanical Technology</Link></li>
            <li><Link to="/course/Electrical Technology">Electrical Technology</Link></li>
            <li><Link to="/course/Electronics Technology">Electronics Technology</Link></li>
          </ul>
        </div>

        {/* Contact & Info */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><strong>Location:</strong> Nagtahan St, Sampaloc, Manila</p>
          <p><strong>Phone:</strong> (02) 243-9467</p>
          <p><strong>Email:</strong> earistofficial1945@gmail.com</p>
          <div className="social-links">
            <a href="https://www.facebook.com/EARISTOfficial" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com/earist1945" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2026 EULOGIO "AMANG" RODRIGUEZ INSTITUTE OF SCIENCE AND TECHNOLOGY</p>
        <p>College of Industrial Technology - Committed to Excellence in Technical Education</p>
      </div>
    </footer>
  );
}

export default Footer;
