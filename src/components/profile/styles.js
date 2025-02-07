import styled from 'styled-components';

export const Section = styled.section`
  padding: 2rem;
  background: white;
  border: 3px solid black;
  margin-bottom: 2rem;
  box-shadow: ${props => props.theme.shadows.comic};
`;

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.accent};
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.accent};
`;

export const Item = styled.div`
  margin-bottom: 2rem;
`;

export const ItemTitle = styled.h3`
  font-family: ${props => props.theme.fonts.accent};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.primary};
`;

export const Subtitle = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: 1rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text};
  line-height: 1.5;
`;

export const Link = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`; 