import styled from 'styled-components';

export const Section = styled.div`
  margin: 0;
  padding: 0;
`;

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.accent};
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  color: ${props => props.theme.colors.accent};
  margin: 0 0 2rem 0;
  text-align: center;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.2);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 3px;
    background: ${props => props.theme.colors.primary}40;
  }
`;

export const Item = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.secondary}10;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ItemTitle = styled.h3`
  font-family: ${props => props.theme.fonts.accent};
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.primary};
`;

export const Subtitle = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: 1rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.3rem;
  
  @media (min-width: 1024px) {
    font-size: 0.95rem;
  }
`;

export const Description = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: 0.95rem;
  color: ${props => props.theme.colors.text};
  line-height: 1.5;
`;

export const Link = styled.a`
  display: inline-block;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: bold;
  margin-top: 0.5rem;
  padding: 0.3rem 0;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;

  &:hover {
    border-bottom-color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
  }
`; 