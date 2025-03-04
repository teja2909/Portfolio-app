import React from 'react';
import './styles/Footer.scss';
import { FaArrowUp } from 'react-icons/fa'; // Import FontAwesome Up Arrow Icon

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <footer className="footer">
        <div className="text">
          <p>Copyright © 2025 Vorsu Teja Vigneshwar</p>
        </div>
        {/* Scroll-to-top button with an arrow icon */}
        <button onClick={scrollToTop} className="scroll-top" aria-label="Scroll to top">
          <FaArrowUp className="arrow-icon" />
        </button>
      </footer>
    </div>
  );
};

export default Footer;
