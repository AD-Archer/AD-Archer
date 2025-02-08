import PropTypes from 'prop-types';
import { ButtonContainer, RevealButton } from '../../styles/AppStyles';

const SocialButtons = ({ showGitHubProfile, setShowGitHubProfile, showLinkedIn, setShowLinkedIn }) => {
  return (
    <ButtonContainer>
      <RevealButton
        onClick={() => setShowGitHubProfile(!showGitHubProfile)}
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
      >
        {showGitHubProfile ? 'Hide GitHub Profile' : 'Show GitHub Profile'}
      </RevealButton>

      <RevealButton
        onClick={() => setShowLinkedIn(!showLinkedIn)}
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
      >
        {showLinkedIn ? 'Hide LinkedIn Feed' : 'Unwrap the LinkedIn!'}
      </RevealButton>
    </ButtonContainer>
  );
};

SocialButtons.propTypes = {
  showGitHubProfile: PropTypes.bool.isRequired,
  setShowGitHubProfile: PropTypes.func.isRequired,
  showLinkedIn: PropTypes.bool.isRequired,
  setShowLinkedIn: PropTypes.func.isRequired,
};

export default SocialButtons; 