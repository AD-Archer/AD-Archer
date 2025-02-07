import styled from 'styled-components';
import { motion } from 'framer-motion';

const TechStackContainer = styled(motion.section)`
  padding: 2rem;
  background: white;
  border: 3px solid black;
  margin: 2rem auto;
  max-width: 1200px;
  box-shadow: ${props => props.theme.shadows.comic};
`;

const CategoryTitle = styled.h3`
  font-family: ${props => props.theme.fonts.accent};
  font-size: 1.5rem;
  color: ${props => props.theme.colors.accent};
  margin: 1.5rem 0 1rem;
  text-transform: capitalize;
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SkillBadge = styled(motion.div)`
  background: ${props => props.theme.colors.primary}15;
  color: ${props => props.theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 2px solid ${props => props.theme.colors.primary};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: ${props => props.theme.colors.primary}25;
  }
`;

const techStack = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'Vite', 'Next.js'],
  backend: ['Express', 'Python', 'Node.js'],
  databases: ['MySQL', 'Neon Postgres', 'MongoDB', 'Firebase'],
  tools: ['Git', 'GitHub', 'Trello', 'Jira', 'Figma'],
  hosting: ['Netlify', 'Vercel', 'AWS'],
};

const TechStack = () => {
  return (
    <TechStackContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        style={{
          fontFamily: 'Bangers',
          fontSize: '2rem',
          color: '#333',
          textAlign: 'center',
          marginBottom: '2rem'
        }}
      >
        Tech Arsenal
      </motion.h2>
      
      {Object.entries(techStack).map(([category, skills], categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 + categoryIndex * 0.1 }}
        >
          <CategoryTitle>{category}</CategoryTitle>
          <SkillsGrid>
            {skills.map((skill, skillIndex) => (
              <SkillBadge
                key={skill}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
              >
                {skill}
              </SkillBadge>
            ))}
          </SkillsGrid>
        </motion.div>
      ))}
    </TechStackContainer>
  );
};

export default TechStack; 