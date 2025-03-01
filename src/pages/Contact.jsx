import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faLinkedin, 
  faInstagram, 
  faTwitter 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt, 
  faClock,
  faGlobe,
  faFile,
  faMessage
} from '@fortawesome/free-solid-svg-icons';
import { HeroTitle, ProfileImage } from '../styles/AppStyles';
import antonioImage from '/images/antonioarcher.jpeg';
import { Link } from 'react-router-dom';  
import ContactForm from '../components/contact/ContactForm';

const ContactContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: ${props => props.theme.shadows.comic};
  border: 3px solid ${props => props.theme.colors.primary};

  @media (max-width: 768px) {
    padding: 1.5rem;
    box-shadow: ${props => props.theme.shadows.comicMobile};
  }
`;

const ProfileSection = styled(ContactCard)`
  text-align: center;

  h2 {
    font-family: ${props => props.theme.fonts.accent};
    color: ${props => props.theme.colors.accent};
    margin: 1rem 0;
    font-size: 1.8rem;
  }

  p {
    font-family: ${props => props.theme.fonts.body};
    color: ${props => props.theme.colors.textPrimary};
    line-height: 1.6;
    margin: 1rem 0;
  }
`;

const ContactLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${props => props.theme.colors.background};
  border: 2px solid ${props => props.theme.colors.primary}30;
  border-radius: 8px;
  text-decoration: none;
  color: ${props => props.theme.colors.textPrimary};
  transition: all 0.3s ease;
  font-family: ${props => props.theme.fonts.body};
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.primary};
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: ${props => props.theme.colors.primary};
    color: white;

    &:before {
      opacity: 0.1;
    }

    svg {
      color: ${props => props.theme.colors.primary};
      transform: scale(1.1);
    }
  }

  svg {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.primary};
    transition: transform 0.3s ease;
    position: relative;
    z-index: 2;
  }

  span {
    position: relative;
    z-index: 2;
  }
`;

const SocialSection = styled(ContactCard)`
  h3 {
    font-family: ${props => props.theme.fonts.accent};
    color: ${props => props.theme.colors.accent};
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const SocialButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-family: ${props => props.theme.fonts.accent};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.hover};

    &:before {
      opacity: 0.1;
    }

    svg {
      transform: scale(1.1) rotate(5deg);
    }
  }

  svg {
    font-size: 1.5rem;
    transition: transform 0.3s ease;
    position: relative;
    z-index: 1;
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

const MessageButton = styled(motion.button)`
  width: 100%;
  margin-top: 1.5rem;
  padding: 1rem;
  background: ${props => props.theme.colors.accent};
  color: white;
  border: none;
  border-radius: 8px;
  font-family: ${props => props.theme.fonts.accent};
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.hover};
  }

  svg {
    font-size: 1.2rem;
  }
`;

const Contact = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const currentTime = new Date().toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  return (
    <>
      <ContactContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroTitle
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Let's Connect!
        </HeroTitle>

        <ContactGrid>
          <ProfileSection
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <ProfileImage 
              src={antonioImage} 
              alt="Antonio Archer"
              as={motion.img}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
            />
            <h2>Antonio Archer</h2>
            <p>Full Stack Software Engineer based in Philadelphia, PA</p>
            
            <ContactLinks>
              <ContactLink href="mailto:adarcher21@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>adarcher21@gmail.com</span>
              </ContactLink>
              <ContactLink href="tel:+12672256778">
                <FontAwesomeIcon icon={faPhone} />
                <span>(267) 225-6778</span>
              </ContactLink>
              <ContactLink href="https://maps.google.com/?q=Philadelphia,PA" target="_blank">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>Philadelphia, PA</span>
              </ContactLink>
              <ContactLink as="div">
                <FontAwesomeIcon icon={faClock} />
                <span>{currentTime} EST</span>
              </ContactLink>
              <ContactLink as={Link} to="/resume">
                <FontAwesomeIcon icon={faFile} />
                <span>View Resume</span>
              </ContactLink>
              <ContactLink href="https://adarcher.app" target="_blank">
                <FontAwesomeIcon icon={faGlobe} />
                <span>LinkTree Website</span>
              </ContactLink>
            </ContactLinks>

            <MessageButton
              onClick={() => setShowContactForm(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FontAwesomeIcon icon={faMessage} />
              Send Me a Message
            </MessageButton>
          </ProfileSection>

          <SocialSection
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3>Connect With Me</h3>
            <SocialGrid>
              <SocialButton 
                href="https://github.com/AD-Archer" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span>GitHub</span>
              </SocialButton>
              <SocialButton 
                href="https://linkedin.com/in/antonio-archer" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                <span>LinkedIn</span>
              </SocialButton>
              <SocialButton 
                href="https://twitter.com/ad_archer_" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
                <span>Twitter</span>
              </SocialButton>
              <SocialButton 
                href="https://www.instagram.com/antonio_darcher/" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
                <span>Instagram</span>
              </SocialButton>
            </SocialGrid>
          </SocialSection>
        </ContactGrid>
      </ContactContainer>

      <AnimatePresence>
        {showContactForm && (
          <ContactForm onClose={() => setShowContactForm(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact;
