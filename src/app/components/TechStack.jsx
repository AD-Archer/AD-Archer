import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

const TechStackContainer = styled(motion.section)`
  padding: 1.5rem;
  background: white;
  border: 3px solid black;
  margin: 1.5rem auto;
  max-width: 1000px;
  box-shadow: ${props => props.theme.shadows.comic};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1rem;
    box-shadow: ${props => props.theme.shadows.comicMobile};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.05) 100%);
    pointer-events: none;
  }
`;

const CategoryTitle = styled.h3`
  font-family: ${props => props.theme.fonts.accent};
  font-size: 1.75rem;
  color: ${props => props.theme.colors.accent};
  margin: 1.5rem 0 1rem;
  text-transform: uppercase;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  padding-left: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding-left: 1.75rem;
    margin: 1rem 0 0.75rem;
  }

  &::before {
    content: '⚡';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 0.75rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 0.75rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }
`;

const SkillBadge = styled(motion.div)`
  background: ${props => `${props.theme.colors.primary}10`};
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  border: 2px solid ${props => `${props.theme.colors.primary}30`};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 0.75rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.hover};
    border-color: ${props => props.theme.colors.primary};
    background: ${props => `${props.theme.colors.primary}15`};
  }
`;

const SkillIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 0.75rem;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2));
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    margin-bottom: 0.5rem;
  }

  ${SkillBadge}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`;

const SkillName = styled.span`
  display: block;
  font-family: ${props => props.theme.fonts.accent};
  font-size: 0.9rem;
  color: ${props => props.theme.colors.primary};
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const PowerLevel = styled.div`
  width: 100%;
  height: 4px;
  background: ${props => `${props.theme.colors.primary}20`};
  border-radius: 2px;
  margin-top: 0.5rem;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${props => props.$level}%;
    background: ${props => props.theme.colors.primary};
    animation: powerUp 1s ease-out;
  }

  @keyframes powerUp {
    from { width: 0; }
    to { width: ${props => props.$level}%; }
  }
`;

const TechStackDescription = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: 1.1rem;
  color: ${props => props.theme.colors.primary};
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto 2rem auto;
  text-align: center;
`;

const techStack = {
  frontend: [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', power: 100 },
    { name: 'Vue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', power: 100 },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', power: 70 },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', power: 100 },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', power: 90 },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', power: 95 },
    { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg', power: 80 },
  ],
  backend: [
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', power: 100 },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', power: 99 },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', power: 80 },
  ],
  databases: [
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', power: 85 },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', power: 80 },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', power: 75 },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', power: 100 },
  ],
  tools: [
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', power: 90 },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', power: 95 },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', power: 75 },
  ],
  hosting: [
    { name: 'AWS', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', power: 70 },
    { name: 'Vercel', icon: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png', power: 100 },
    { name: 'Netlify', icon: 'https://www.netlify.com/icon.svg', power: 85 },
  ],
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
          fontSize: 'clamp(2rem, 5vw, 2.5rem)',
          color: '#333',
          textAlign: 'center',
          marginBottom: '0.5rem',
          textShadow: '2px 2px 0 rgba(0,0,0,0.2)',
        }}
      >
        SUPER TECH POWERS
      </motion.h2>
      
      <TechStackDescription>
        Power bars indicate my frequency of use and comfort level with each technology. 
        Click any tech to filter related projects below! ⚡
      </TechStackDescription>

      {Object.entries(techStack).map(([category, skills], categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 + categoryIndex * 0.1 }}
        >
          <CategoryTitle>{category}</CategoryTitle>
          <SkillsGrid>
            {skills.map((skill) => (
              <SkillBadge key={skill.name} whileHover={{ scale: 1.05 }}>
                <SkillIcon src={skill.icon} alt={skill.name} />
                <SkillName>{skill.name}</SkillName>
                <PowerLevel $level={skill.power} />
              </SkillBadge>
            ))}
          </SkillsGrid>
        </motion.div>
      ))}
    </TechStackContainer>
  );
};

export default TechStack;