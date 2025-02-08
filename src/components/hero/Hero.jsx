import { HeroTitle, SpeechBubble, ProfileImage } from '../../styles/AppStyles';
import antonioImage from '/images/antonioarcher.jpeg';

const Hero = () => {
  return (
    <>
      <HeroTitle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        ANTONIO ARCHER
      </HeroTitle>
      
      <SpeechBubble
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <ProfileImage 
          src={antonioImage} 
          alt="Antonio Archer"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
        <h2>Full Stack Software Engineer</h2>
        <p>
          Crafting innovative web solutions with React.js, JavaScript, and Python. 
          Dedicated to making technology both fun and practical while improving human lives.
        </p>
        <p className="credentials">
          Certified in Python | React.js Expert | JavaScript Developer
        </p>
      </SpeechBubble>
    </>
  );
};

export default Hero; 