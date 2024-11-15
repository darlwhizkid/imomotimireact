import { useState, useEffect } from 'react';

const TopBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`top-bar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="Imomotimi Ijaw Dance Contest Logo" />
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#notes">Notes</a>
        <a href="#location">Location</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};
