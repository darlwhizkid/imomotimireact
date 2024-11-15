import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 29,
    hours: 2,
    minutes: 8,
    seconds: 6
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        // Add your countdown logic here
        return {
          days: prevTime.days,
          hours: prevTime.hours,
          minutes: prevTime.minutes,
          seconds: prevTime.seconds - 1
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="countdown">
      <div className="countdown-container">
        <h1 className="countdown-title">Countdown to Audition</h1>
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
      <img src={process.env.PUBLIC_URL + '/assets/images/shape-top-grey-80.png'} alt="Decorative shape" className="wave-shape-bottom" />
    </section>
  );
};

export default Countdown;