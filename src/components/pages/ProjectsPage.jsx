// src/components/pages/ProjectsPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import GitHubProjects from '../github-components/GitHubProjects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faRocket, faTools } from '@fortawesome/free-solid-svg-icons';
import { useTechFilter } from '../../context/TechFilterContext';

const ProjectsContainer = styled(motion.div)`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ProjectsHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled(motion.h1)`
  font-family: ${props => props.theme.fonts.accent};
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: ${props => props.theme.colors.accent};
  margin-bottom: 1rem;
  text-shadow: 3px 3px 0 rgba(0,0,0,0.1);
`;

const Subtitle = styled(motion.p)`
  font-family: ${props => props.theme.fonts.body};
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  color: ${props => props.theme.colors.textPrimary};
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const StatCard = styled(motion.div)`
  background: ${props => props.isSelected ? props.theme.colors.primary : 'white'};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: ${props => props.theme.shadows.comic};
  border: 3px solid ${props => props.isSelected ? props.theme.colors.accent : props.theme.colors.primary};
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.hover};
    background: ${props => props.isSelected ? props.theme.colors.primary : `${props.theme.colors.primary}15`};
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const StatIcon = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
  color: ${props => props.isSelected ? 'white' : props.theme.colors.primary};
  margin-bottom: 1rem;
  transition: color 0.3s ease;
`;

const StatTitle = styled.h3`
  font-family: ${props => props.theme.fonts.accent};
  color: ${props => props.isSelected ? 'white' : props.theme.colors.primary};
  font-size: 1.5rem;
  margin: 0.5rem 0;
  transition: color 0.3s ease;
`;

const StatDescription = styled.p`
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.isSelected ? 'white' : props.theme.colors.textPrimary};
  font-size: 1rem;
  line-height: 1.5;
  opacity: ${props => props.isSelected ? 1 : 0.9};
  transition: color 0.3s ease;
`;

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { setSelectedTech } = useTechFilter();

  const handleCategoryClick = (category) => {
    // If clicking the same category, clear the filter
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
    // Clear any tech filter when changing categories
    setSelectedTech(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <ProjectsContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <ProjectsHeader>
        <Title
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Project Showcase
        </Title>
        <Subtitle
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Explore my collection of web applications, utilities, and creative projects. 
          Click on a category to filter projects!
        </Subtitle>
      </ProjectsHeader>

      <StatsGrid>
        <StatCard
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleCategoryClick('Frontend Apps')}
          isSelected={selectedCategory === 'Frontend Apps'}
        >
          <StatIcon icon={faCode} isSelected={selectedCategory === 'Frontend Apps'} />
          <StatTitle isSelected={selectedCategory === 'Frontend Apps'}>Frontend Apps</StatTitle>
          <StatDescription>
            Interactive web applications built with React and modern JavaScript frameworks
          </StatDescription>
        </StatCard>

        <StatCard
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleCategoryClick('Full-stack Apps')}
          isSelected={selectedCategory === 'Full-stack Apps'}
        >
          <StatIcon icon={faRocket} isSelected={selectedCategory === 'Full-stack Apps'} />
          <StatTitle isSelected={selectedCategory === 'Full-stack Apps'}>Full-stack Apps</StatTitle>
          <StatDescription>
            Complete solutions with robust backend systems and database integration
          </StatDescription>
        </StatCard>

        <StatCard
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleCategoryClick('Utilities')}
          isSelected={selectedCategory === 'Utilities'}
        >
          <StatIcon icon={faTools} isSelected={selectedCategory === 'Utilities'} />
          <StatTitle isSelected={selectedCategory === 'Utilities'}>Utilities</StatTitle>
          <StatDescription>
            Practical tools and utilities designed to solve specific development needs
          </StatDescription>
        </StatCard>
      </StatsGrid>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <GitHubProjects initialCategory={selectedCategory} />
      </motion.div>
    </ProjectsContainer>
  );
};

export default ProjectsPage;