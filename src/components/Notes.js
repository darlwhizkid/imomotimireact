import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Notes = () => {
  const { darkMode } = useTheme();

  const sectionStyle = {
    backgroundColor: darkMode ? '#272621' : '#f6f4ee',
    color: darkMode ? '#ffffff' : '#000000',
  };

  const containerStyle = {
    backgroundColor: darkMode ? '#272621' : '#f6f4ee',
  };

  return (
    <section id="notes" style={sectionStyle}>
      <div className="notes-container" style={containerStyle}>
        <div className="notes-content">
          <div className="notes-header">
            <h1 style={{ color: sectionStyle.color }}>Important things <br/>to note...</h1>
          </div>
          <div className="notes-info">
            <div className="info-item">
              <i className="fa-solid fa-money-bill-wave" style={{ color: sectionStyle.color }}></i>
              <h2 style={{ color: sectionStyle.color }}>Pricing</h2>
              <p style={{ color: sectionStyle.color }}>Audition forms are available for<br/>₦1,000 for single contestants,<br/>and ₦1,500 for a group of five.</p>
            </div>
            <div className="info-item">
              <i className="fas fa-trophy" style={{ color: sectionStyle.color }}></i>
              <h2 style={{ color: sectionStyle.color }}>Prizes</h2>
              <p style={{ color: sectionStyle.color }}>
                <strong style={{ color: sectionStyle.color }}>1st Prize:</strong> ₦2,000,000<br/>
                <strong style={{ color: sectionStyle.color }}>2nd Prize:</strong> ₦1,000,000<br/>
                <strong style={{ color: sectionStyle.color }}>3rd Prize:</strong> ₦500,000
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notes;