import React from 'react';
import { motion } from 'framer-motion';

const LinkedInFeed = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start off-screen and transparent
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible and in place
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }} // Spring effect
      style={{ width: '100%', height: '1000px', overflow: 'hidden' }}
    >
      <iframe 
        src='https://widgets.sociablekit.com/linkedin-profile-posts/iframe/25520750' 
        frameBorder='0' 
        width='100%' 
        height='1000' 
        title='LinkedIn Feed'
      ></iframe>
    </motion.div>
  );
};

export default LinkedInFeed; 