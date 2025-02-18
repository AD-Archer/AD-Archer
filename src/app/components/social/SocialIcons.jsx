import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { SocialLinks, SocialIcon } from '../../styles/AppStyles';

const SocialIcons = () => {
  return (
    <SocialLinks
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <SocialIcon 
        href="https://linkedin.com/in/antonio-archer" 
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </SocialIcon>
      <SocialIcon 
        href="https://github.com/AD-Archer" 
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </SocialIcon>
    </SocialLinks>
  );
};

export default SocialIcons; 