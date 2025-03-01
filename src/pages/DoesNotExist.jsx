import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCompass, faBug } from '@fortawesome/free-solid-svg-icons';

const NotFoundContainer = styled(motion.div)`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  text-align: center;
`;

const ErrorCode = styled(motion.h1)`
  font-family: ${props => props.theme.fonts.accent};
  font-size: clamp(4rem, 15vw, 8rem);
  color: ${props => props.theme.colors.accent};
  margin: 0;
  line-height: 1;
  text-shadow: 4px 4px 0 ${props => props.theme.colors.primary}40;
`;

const Title = styled(motion.h2)`
  font-family: ${props => props.theme.fonts.accent};
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: ${props => props.theme.colors.primary};
  margin: 1rem 0;
`;

const Description = styled(motion.p)`
  font-family: ${props => props.theme.fonts.body};
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: ${props => props.theme.colors.textPrimary};
  margin: 1rem 0 2rem;
  line-height: 1.6;
`;

const NavigationGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const NavCard = styled(Link)`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: ${props => props.theme.shadows.comic};
  border: 2px solid ${props => props.theme.colors.primary};
  text-decoration: none;
  color: ${props => props.theme.colors.textPrimary};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.hover};
    border-color: ${props => props.theme.colors.accent};
    
    svg {
      color: ${props => props.theme.colors.accent};
      transform: scale(1.1);
    }
  }

  svg {
    font-size: 2rem;
    color: ${props => props.theme.colors.primary};
    transition: all 0.3s ease;
  }

  h3 {
    font-family: ${props => props.theme.fonts.accent};
    margin: 0;
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    opacity: 0.8;
  }
`;

const DoesNotExist = () => {
  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <NotFoundContainer
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <ErrorCode variants={itemVariants}>404</ErrorCode>
      <Title variants={itemVariants}>Page Not Found</Title>
      <Description variants={itemVariants}>
        Oops! Looks like you've ventured into uncharted territory. 
        Don't worry though, let's get you back on track!
      </Description>

      <NavigationGrid variants={itemVariants}>
        <NavCard to="/">
          <FontAwesomeIcon icon={faHome} />
          <h3>Return Home</h3>
          <p>Back to the main page</p>
        </NavCard>

        <NavCard to="/projects">
          <FontAwesomeIcon icon={faCompass} />
          <h3>View Projects</h3>
          <p>Check out my work</p>
        </NavCard>

        <NavCard to="/contact">
          <FontAwesomeIcon icon={faBug} />
          <h3>Report Issue</h3>
          <p>Let me know what went wrong</p>
        </NavCard>
      </NavigationGrid>
    </NotFoundContainer>
  );
};

export default DoesNotExist;
