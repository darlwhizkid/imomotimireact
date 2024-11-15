import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Countdown from './components/Countdown';
import Notes from './components/Notes';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

// CSS imports
import './App.css';
import './assets/css/work.css';
import './assets/css/light.css';
import './assets/css/dark.css';
import './assets/Font Awesome/css/all.css';

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      document.body.classList.remove('light,');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`App ${isDark ? 'dark' : 'light'}`}>
      <Header toggleTheme={toggleTheme} isDark={isDark} />
      <Countdown />
      <Notes />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;