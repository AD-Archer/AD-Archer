import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LinkedInFeed = () => {
  const [isLoaded, setIsLoaded] = useState(false); // State to track loading

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widgets.sociablekit.com/linkedin-profile-posts/widget.js';
    script.defer = true;
    document.body.appendChild(script);

    // Set loading to true when the script is loaded
    script.onload = () => setIsLoaded(true);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }} // Start off-screen and transparent
      animate={{ opacity: isLoaded ? 1 : 0 }} // Animate to visible when loaded
      transition={{ duration: 0.5 }} // Transition duration
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