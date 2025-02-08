import styled from 'styled-components';

export const Section = styled.section`
  padding: 1.5rem;
  background: white;
  border: 3px solid black;
  margin-bottom: 2rem;
  box-shadow: ${props => props.theme.shadows.comic};

  @media (min-width: 1024px) {
    margin-bottom: 0;
    height: fit-content;
    position: sticky;
    top: 20px;
  }
`;

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.accent};
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
  color: ${props => props.theme.colors.accent};
  padding-bottom: 0.5rem;
  border-bottom: 3px solid ${props => props.theme.colors.secondary}40;
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