import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProfileContainer = styled(motion.div)`
  padding: 2rem;
  background: white;
  border: 3px solid black;
  box-shadow: ${props => props.theme.shadows.comic};
  margin: 2rem auto;
  max-width: 1200px;
  height: 800px;
  overflow: hidden;
`;

const ProfileFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  background: white;
`;

const GitHubProfile = () => {
  return (
    <ProfileContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ProfileFrame
        src="https://github.com/AD-Archer"
        title="Antonio Archer GitHub Profile"
        loading="lazy"
        sandbox="allow-scripts allow-same-origin"
      />
    </ProfileContainer>
  );
};

export default GitHubProfile; 