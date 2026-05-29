import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Simulates small "agents" or data packets darting across the background
const BackgroundAgents = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    // Generate initial agents
    const initialAgents = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 3 + 2, // 2-5 seconds
      delay: Math.random() * 5,
    }));
    setAgents(initialAgents);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: -1,
      overflow: 'hidden'
    }}>
      {agents.map(agent => (
        <motion.div
          key={agent.id}
          style={{
            position: 'absolute',
            width: '2px',
            height: '15px',
            background: 'rgba(255, 107, 0, 0.6)',
            boxShadow: '0 0 10px rgba(255, 107, 0, 0.8)',
            borderRadius: '2px',
          }}
          initial={{
            x: `${agent.x}vw`,
            y: `${agent.y}vh`,
            opacity: 0,
            rotate: Math.random() * 360
          }}
          animate={{
            x: `${agent.x + (Math.random() > 0.5 ? 20 : -20)}vw`,
            y: `${agent.y + (Math.random() > 0.5 ? 20 : -20)}vh`,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: agent.duration,
            repeat: Infinity,
            delay: agent.delay,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Distant explosions/clashes */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`clash-${i}`}
          style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            background: '#fff',
            boxShadow: '0 0 20px 5px rgba(255, 107, 0, 0.5)',
            borderRadius: '50%',
          }}
          initial={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
            scale: 0,
            opacity: 0
          }}
          animate={{
            scale: [0, 5, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: Math.random() * 8 + 2,
            delay: Math.random() * 5
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAgents;
