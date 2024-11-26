import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="footer-content">
        <div className="social-heading">
          <h2>We Are Social</h2>
        </div>
        <div className="social">
          <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social-icon"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
          <a href="#" className="social-icon"><i className="fa-brands fa-youtube"></i></a>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Imomotimi Foundation. All Rights Reserved.</p>
        </div>
      </div>
      <a href="#" id="scroll-to-top" onClick={scrollToTop}>
        <i className="fas fa-arrow-up" id="scroll-icon"></i>
      </a>
    </footer>
  );
};

export default Footer;
