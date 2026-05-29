import React from 'react';
import { motion } from 'framer-motion';

const ScrollSection = ({ children, direction = "left", className = "" }) => {
  // Calculate the sliding distance based on direction
  const xDist = direction === "left" ? -50 : direction === "right" ? 50 : 0;
  const yDist = direction === "center" ? 30 : 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: xDist,
        y: yDist,
        scale: 0.95
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1
      }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '80px 24px',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollSection;
