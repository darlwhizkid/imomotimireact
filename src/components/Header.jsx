import { useState, useEffect } from 'react';

const Header = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const images = [
    'url("/images/1.jpg")',
    'url("/images/2.jpg")',
    'url("/images/3.jpg")'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="header">
      {images.map((image, index) => (
        <div
          key={index}
          className="carousel-slide"
          style={{
            backgroundImage: image,
            opacity: currentImage === index ? 1 : 0,
            zIndex: currentImage === index ? 1 : 0
          }}
        />
      ))}
      <button onClick={toggleTheme} className="theme-toggle">
        {isDarkMode ? (
          <span className="sun-icon">☀️</span>
        ) : (
          <span className="moon-icon">🌙</span>
        )}
      </button>
    </header>
  );
};

export default Header;