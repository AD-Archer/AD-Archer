import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BubblesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
`;

// Animated background bubble
const Bubble = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  z-index: -1;
  mix-blend-mode: multiply;
  filter: blur(2px);
`;

const BackgroundBubbles = () => {
  // Detect if we're on mobile
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Check on mount
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Generate more background bubbles for a dynamic background
  const bubbles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 400 + 100,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 60 + 30,
    delay: i * 0.3,
    opacity: Math.random() * 0.15 + 0.05,
    color: i % 3 === 0 
      ? 'rgba(100, 100, 255, 0.05)' 
      : i % 3 === 1 
        ? 'rgba(255, 100, 100, 0.05)' 
        : 'rgba(100, 255, 100, 0.05)'
  }));
  
  return (
    <BubblesContainer>
      {/* Show more bubbles on desktop, fewer on mobile for performance */}
      {bubbles.slice(0, isMobile ? 8 : 20).map(bubble => (
        <Bubble 
          key={bubble.id}
          initial={{ 
            opacity: 0, 
            scale: 0,
            x: `${bubble.x}vw`,
            y: `${bubble.y}vh`
          }}
          animate={{ 
            opacity: bubble.opacity, 
            scale: 1,
            x: [`${bubble.x}vw`, `${(bubble.x + 15) % 100}vw`, `${(bubble.x - 10) % 100}vw`, `${bubble.x}vw`],
            y: [`${bubble.y}vh`, `${(bubble.y - 20) % 100}vh`, `${(bubble.y + 15) % 100}vh`, `${bubble.y}vh`]
          }}
          transition={{ 
            duration: 3,
            delay: bubble.delay,
            x: { 
              repeat: Infinity, 
              duration: bubble.duration, 
              ease: "easeInOut" 
            },
            y: { 
              repeat: Infinity, 
              duration: bubble.duration * 1.2, 
              ease: "easeInOut" 
            }
          }}
          style={{ 
            width: isMobile ? bubble.size * 0.7 : bubble.size, 
            height: isMobile ? bubble.size * 0.7 : bubble.size,
            background: bubble.color
          }}
        />
      ))}
    </BubblesContainer>
  );
};

export default BackgroundBubbles; 