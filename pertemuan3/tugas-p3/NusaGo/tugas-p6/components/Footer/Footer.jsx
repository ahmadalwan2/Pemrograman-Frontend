import './Footer.css';

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id='footer'>
      <div className="footer-content">
        <h2 className="footer-logo">NusaGo</h2>
        <p className="footer-desc">Semua kebutuhan wisata Anda dalam satu tempat</p>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">FAQ</a>
        </div>

        <div className="footer-social">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 NusaGo. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
