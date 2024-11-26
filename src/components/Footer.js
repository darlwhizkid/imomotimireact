import React, { useEffect, useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    setIsVisible(window.scrollY > 300); // Show button after scrolling down 300px
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      {isVisible && (
        <a href="#" id="scroll-to-top" onClick={scrollToTop}>
          <i className="fas fa-arrow-up" id="scroll-icon"></i>
        </a>
      )}
    </footer>
  );
};

export default Footer;
