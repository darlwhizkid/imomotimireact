import React from "react";
import { useTheme } from "../context/ThemeContext";

const Location = () => {
  const { darkMode } = useTheme();
  console.log('Dark Mode:', darkMode); // Debugging log

  const imagePath = process.env.PUBLIC_URL + `/assets/images/shape-top-${darkMode ? "dark-" : ""}grey-80.png`;
  console.log('Image Path:', imagePath); // Debugging log

  return (
    <section 
      id="location" 
      style={{ backgroundColor: darkMode ? "#272621" : "#444444" }}
    >
      <div style={{ position: "relative" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.051559376202!2d6.316094377787738!3d4.931030982268803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106a055be1dcce59%3A0xa6c5b6a97ac6c1a!2sNitro%20Studios!5e0!3m2!1sen!2sng!4v1727710227172!5m2!1sen!2sng"
          style={{ border: 0, width: "100%", height: "400px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <img
          src={imagePath}
          alt="Decorative shape"
          className="wave-shape-bottom"
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            transform: "translateY(-5%)",
          }}
        />
      </div>
    </section>
  );
};

export default Location;
