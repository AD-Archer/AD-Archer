import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroTitle = styled(motion.h1)`
  font-family: ${props => props.theme.fonts.title};
  font-size: clamp(3rem, 8vw, 6rem);
  color: ${props => props.theme.colors.primary};
  text-shadow: 3px 3px 0 #000;
  margin: 2rem 0;
  text-align: center;
`;

export const SpeechBubble = styled(motion.div)`
  background: white;
  border: 3px solid black;
  border-radius: 30px;
  padding: 2rem;
  position: relative;
  margin: 3rem auto;
  max-width: 800px;
  box-shadow: ${props => props.theme.shadows.comic};
  
  &::before {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top-color: black;
    transform: translateX(-50%);
  }

  h2 {
    font-family: ${props => props.theme.fonts.accent};
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.accent};
  }

  p {
    font-family: ${props => props.theme.fonts.body};
    font-size: clamp(1rem, 2vw, 1.2rem);
    line-height: 1.6;
  }

  .credentials {
    margin-top: 1rem;
    font-style: italic;
    color: ${props => props.theme.colors.accent};
  }
`;

export const SocialLinks = styled(motion.div)`
  position: sticky;
  top: 20px;
  margin-left: auto;
  width: fit-content;
  display: flex;
  gap: 1rem;
  z-index: 1000;
  padding-right: 20px;
  
  @media (max-width: 768px) {
    top: 10px;
    padding-right: 10px;
    gap: 0.5rem;
  }
`;

export const SocialIcon = styled(motion.a)`
  background: ${props => props.theme.colors.secondary};
  color: black;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  box-shadow: ${props => props.theme.shadows.comic};
  transition: transform 0.3s ease;
  position: relative;
  backdrop-filter: blur(5px);
  
  &:hover {
    transform: scale(1.1) rotate(5deg);
    color: black;
  }

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: ${props => props.theme.colors.secondary}40;
    border-radius: 50%;
    z-index: -1;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem auto;
  flex-wrap: wrap;
`;

export const RevealButton = styled(motion.button)`
  background: ${props => props.theme.colors.secondary};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${props => props.theme.colors.primary};
  }
`;

export const ProfileImage = styled(motion.img)`
  width: 200px;
  border-radius: 10px;
  margin: 0 auto 2rem;
  display: block;
  border: 3px solid black;
  box-shadow: ${props => props.theme.shadows.comic};
`; 
// const SectionTitle = styled(motion.h2)`
//   font-family: ${props => props.theme.fonts.title};
//   font-size: clamp(2rem, 6vw, 4rem);
//   color: ${props => props.theme.colors.accent};
//   text-align: center;
//   margin: 4rem 0;
//   text-shadow: 2px 2px 0 #000;
//   position: relative;
  
//   &::after {
//     content: '';
//     position: absolute;
//     bottom: -10px;
//     left: 50%;
//     transform: translateX(-50%);
//     width: min(150px, 50%);
//     height: 3px;
//     background: ${props => props.theme.colors.primary};
//   }
// `;