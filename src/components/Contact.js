import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h1>For More Information:</h1>
          <p><strong>Hotlines:</strong> <span>07035973706 & 08108112759</span></p>
          <p><strong>Email:</strong> <span>info@ijawdancecontest.ng</span></p>
          <p><strong>Audition Location:</strong> <span>Nitro Studio, Tamara Hall, Otiotio Road, Yenagoa, Bayelsa State.</span></p>
        </div>
        <div className="contact-form">
          <div className="form-group">
            <i className="fa-regular fa-user"></i>
            <input type="text" placeholder="Name" />
          </div>
          <div className="form-group">
            <i className="fa-regular fa-envelope"></i>
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <i className="fas fa-phone-volume"></i>
            <input type="text" placeholder="Phone" />
          </div>
          <div className="form-group">
            <i className="fas fa-info-circle"></i>
            <input type="text" placeholder="Subject" />
          </div>
          <div className="form-group full-width">
            <i className="fas fa-pencil"></i>
            <input type="text" placeholder="How can we help you? Feel free to get in touch!" />
          </div>
          <button className="contact-button">Get In Touch</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;