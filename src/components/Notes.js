import React from 'react';

const Notes = () => {
  return (
    <section id="notes">
      <div className="notes-container">
        <div className="notes-content">
          <div className="notes-header">
            <h1>Important things <br/>to note...</h1>
          </div>
          <div className="notes-info">
            <div className="info-item">
              <i className="fa-solid fa-money-bill-wave"></i>
              <h2>Pricing</h2>
              <p>Audition forms are available for<br/>₦1,000 for single contestants,<br/>and ₦1,500 for a group of five.</p>
            </div>
            <div className="info-item">
              <i className="fas fa-trophy"></i>
              <h2>Prizes</h2>
              <p><strong>1st Prize:</strong> ₦2,000,000<br/><strong>2nd Prize:</strong> ₦1,000,000<br/><strong>3rd Prize:</strong> ₦500,000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notes;