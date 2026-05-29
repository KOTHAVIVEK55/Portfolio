import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="hero-container">
      <div className="hero-split">
        
        {/* LEFT SIDE: Typography */}
        <motion.div 
          className="hero-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="subtitle-wrapper">
            <span className="line"></span>
            <span className="subtitle">BACKEND DEVELOPER</span>
          </div>
          
          <h1 className="main-headline">
            BUILDING SCALABLE SYSTEMS &<br />
            AUTOMATIONS.
          </h1>
          
          <a href="#projects" className="btn-solid-orange">
            VIEW PORTFOLIO
          </a>
        </motion.div>

        {/* RIGHT SIDE: Classic Portrait */}
        <motion.div 
          className="hero-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          {/* We use a wrapper with a fallback background so it looks perfect even before the user places profile.jpg */}
          <div className="portrait-wrapper">
            <img 
              src="/assets/profile.jpg?v=2" 
              alt="Vivek Kotha Profile" 
              className="portrait-img"
            />
            <div className="portrait-glow"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
