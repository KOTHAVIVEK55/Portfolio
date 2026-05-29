import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass-card">
      <div className="footer-content">
        <p className="copyright">
          © {new Date().getFullYear()} Vivek Kotha. All rights reserved.
        </p>
        <p className="credit">
          Designed with <span className="heart">♥</span> for a cinematic experience
        </p>
      </div>
    </footer>
  );
};

export default Footer;
