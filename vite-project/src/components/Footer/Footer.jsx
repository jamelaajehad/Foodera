import React from 'react';
import './Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Review</a>
        <a href="#">FAQ</a>
      </div>
      <div className="footer-social">
        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
        <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
      <div className="footer-copyright">
        &copy; 2024. Foodera. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
