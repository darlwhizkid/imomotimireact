import React from 'react';

const Location = () => {
  return (
    <section id="location">
      <div style={{ position: 'relative' }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.051559376202!2d6.316094377787738!3d4.931030982268803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106a055be1dcce59%3A0xa6c5b6a97ac6c1a!2sNitro%20Studios!5e0!3m2!1sen!2sng!4v1727710227172!5m2!1sen!2sng" 
          style={{ border:0, width: '100%', height: '400px' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        <img className="mapimage" src="/assets/images/shape-top-grey-80.png" alt="Shape top grey" style={{ position: 'absolute', bottom: '-2px', left: 0, width: '100%' }} />
      </div>
    </section>
  );
};

export default Location;