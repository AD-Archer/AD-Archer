import PropTypes from 'prop-types';
import { ButtonContainer, RevealButton } from '../../styles/AppStyles';
import { useState } from 'react';
import ContactForm from '../contact/ContactForm';
import { AnimatePresence } from 'framer-motion';

const SocialButtons = ({ showLinkedIn, setShowLinkedIn }) => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <>
      <ButtonContainer>
        <RevealButton
          onClick={() => setShowContactForm(true)}
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
        >
          Contact Me
        </RevealButton>

        <RevealButton
          onClick={() => setShowLinkedIn(!showLinkedIn)}
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
        >
          {showLinkedIn ? 'Hide LinkedIn' : 'View LinkedIn'}
        </RevealButton>
      </ButtonContainer>
      
      <AnimatePresence>
        {showContactForm && (
          <ContactForm onClose={() => setShowContactForm(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

SocialButtons.propTypes = {
  showLinkedIn: PropTypes.bool.isRequired,
  setShowLinkedIn: PropTypes.func.isRequired,
};

export default SocialButtons; 