import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/countdown.css';

const Countdown = () => {
  const targetDate = new Date('2024-12-01T00:00:00');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const { darkMode } = useTheme();

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section 
      id="countdown" 
      className={darkMode ? 'dark-mode' : ''} 
      style={{
        backgroundColor: darkMode ? '#000000' : '#ffffff',
        color: darkMode ? '#ffffff' : '#000000',
      }}
    >
      <div className="countdown-container">
        <h1 className="countdown-title">
          Countdown to Audition
        </h1>
        <div className="countdown-timer">
          <div className="timer-item">
            <span>{timeLeft.days}</span>
            <div className="timer-label">Days</div>
          </div>
          <div className="timer-separator">:</div>
          <div className="timer-item">
            <span>{timeLeft.hours}</span>
            <div className="timer-label">Hours</div>
          </div>
          <div className="timer-separator">:</div>
          <div className="timer-item">
            <span>{timeLeft.minutes}</span>
            <div className="timer-label">Minutes</div>
          </div>
          <div className="timer-separator">:</div>
          <div className="timer-item">
            <span>{timeLeft.seconds}</span>
            <div className="timer-label">Seconds</div>
          </div>
        </div>
      </div>
      <img 
        src={process.env.PUBLIC_URL + `/assets/images/shape-top-${darkMode ? 'dark-' : ''}grey-80.png`} 
        alt="Decorative shape" 
        className="wave-shape-bottom" 
      />
    </section>
  );
};

export default Countdown;
