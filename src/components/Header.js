import React, { useState, useEffect } from 'react';

const Header = ({ toggleTheme, isDark }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/assets/images/1.jpg',
    '/assets/images/2.jpg',
    '/assets/images/3.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header style={{
      backgroundImage: `url(${images[currentImage]})`,
      transition: 'background-image 0.5s ease-in-out'
    }}>
      <div className="top-bar">
        <img 
          src={process.env.PUBLIC_URL + '/assets/images/logo.png'} 
          alt="Imomotimi Ijaw Dance Contest Logo" 
          width="100" 
          height="100" 
          className="logo" 
        />
        <nav>
                <a href="#">Intro</a>
                <a href="#">Countdown</a>
                <a href="#">Notes</a>
                <a href="#">Location</a>
                <a href="#">Contact</a>
        </nav>
        <div className="theme-toggle">
          {isDark ? (
            <i className="fas fa-sun" onClick={toggleTheme} style={{ cursor: 'pointer' }} />
          ) : (
            <i className="fas fa-moon" onClick={toggleTheme} style={{ cursor: 'pointer' }} />
          )}
        </div>
            <a href="#" className="call-button">
                <i className="fa-solid fa-phone-volume"></i>
                <span>Call Us</span>
            </a>
      </div>
      <div className="header-content">
        <p className="subtitle">IMOMOTIMI FOUNDATION PRESENTS</p>
        <h1>Imomotimi Ijaw Dance Contest 2024</h1>
        <a href="#" className="download-button">
          <span>Download Entry Form</span>
          <i className="fas fa-download"></i>
        </a>
        <p className="entry-note">All duly filled out forms and the entry fees should be brought along to the audition.</p>
        <i className="fa-solid fa-mouse bounce-icon"></i>
      </div>
      <img src="/assets/images/shape-top-white-80.png" alt="Decorative shape" className="wave-shape" />
    </header>
  );
};export default Header;
