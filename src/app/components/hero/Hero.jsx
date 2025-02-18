import Image from 'next/image';
import { HeroTitle, SpeechBubble, ProfileImage } from '../../styles/AppStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const ContactInfo = styled.div`
  margin-top: 1rem;
  font-family: ${props => props.theme.fonts.body}; 
  font-size: clamp(1rem, 2vw, 1.2rem); 
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: ${props => props.theme.colors.accent};

  p {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0;
  }

  i {
    font-size: 1.5rem; 
    color: ${props => props.theme.colors.accent};
  }

  a {
    color: ${props => props.theme.colors.accent};
    text-decoration: none;
    font-weight: bold; 
    transition: color 0.3s ease;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

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
        <ProfileImage as={Image} 
          src="/images/antonioarcher.jpeg" 
          alt="Antonio Archer"
          width={300} // adjust widths as needed
          height={300} // adjust heights as needed
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
        
        <ContactInfo>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:adarcher21@gmail.com">adarcher21@gmail.com</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> 
            <a href="tel:+12672256778">267-225-6778</a>
          </p>
        </ContactInfo>
      </SpeechBubble>
    </>
  );
};

export default Hero;
