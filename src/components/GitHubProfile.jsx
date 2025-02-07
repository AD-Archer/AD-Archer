import styled from 'styled-components';

const ProfileContainer = styled.div`
  padding: 2rem;
  background: white;
  border: 3px solid black;
  box-shadow: ${props => props.theme.shadows.comic};
  margin: 2rem auto;
  max-width: 800px;
`;

const ProfileTitle = styled.h2`
  font-family: ${props => props.theme.fonts.accent};
  font-size: 2rem;
  color: ${props => props.theme.colors.accent};
  margin-bottom: 1rem;
`;

const ProfileLink = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const GitHubProfile = () => {
  return (
    <ProfileContainer>
      <ProfileTitle>Connect with Me on GitHub</ProfileTitle>
      <ProfileLink href="https://github.com/AD-Archer" target="_blank" rel="noopener noreferrer">
        Visit my GitHub Profile
      </ProfileLink>
    </ProfileContainer>
  );
};

export default GitHubProfile; 