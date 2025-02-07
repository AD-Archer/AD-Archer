import styled from 'styled-components';
import { motion } from 'framer-motion';

const TechStackContainer = styled(motion.section)`
  padding: 2rem;
  background: white;
  border: 3px solid black;
  margin: 2rem auto;
  max-width: 1200px;
  box-shadow: ${props => props.theme.shadows.comic};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.05) 100%);
    pointer-events: none;
  }
`;

const CategoryTitle = styled.h3`
  font-family: ${props => props.theme.fonts.accent};
  font-size: 2rem;
  color: ${props => props.theme.colors.accent};
  margin: 2rem 0 1rem;
  text-transform: uppercase;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.2);
  position: relative;
  padding-left: 2.5rem;

  &::before {
    content: '⚡';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.8rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 1rem;
`;

const SkillBadge = styled(motion.div)`
  background: ${props => props.theme.colors.primary}10;
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 2px solid ${props => props.theme.colors.primary}30;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.2) 100%);
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    border-color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.primary}15;
  }
`;

const SkillIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
  filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.2));
  transition: transform 0.3s ease;

  ${SkillBadge}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`;

const SkillName = styled.span`
  display: block;
  font-family: ${props => props.theme.fonts.accent};
  font-size: 1rem;
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
`;

const PowerLevel = styled.div`
  width: 100%;
  height: 4px;
  background: ${props => props.theme.colors.primary}20;
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
          fontSize: '3rem',
          color: '#333',
          textAlign: 'center',
          marginBottom: '2rem',
          textShadow: '3px 3px 0 rgba(0,0,0,0.2)',
        }}
      >
        SUPER TECH POWERS
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
                key={skill.name}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ scale: 1.05 }}
              >
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