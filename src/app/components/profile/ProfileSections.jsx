import Certifications from './Certifications';
import Jobs from './Jobs';
import styled from 'styled-components';

const ProfileGrid = styled.div`
  display: grid;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      width: 4px;
      background: repeating-linear-gradient(
        to bottom,
        ${props => props.theme.colors.primary}20,
        ${props => props.theme.colors.primary}20 10px,
        transparent 10px,
        transparent 20px
      );
      transform: translateX(-50%);
    }
  }
`;

const Panel = styled.div`
  position: relative;
  background: white;
  border: 3px solid black;
  box-shadow: ${props => props.theme.shadows.comic};
  padding: 2rem;

  @media (max-width: 768px) {
    box-shadow: ${props => props.theme.shadows.comicMobile};
  }

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: -10px;
    bottom: -10px;
    background: rgba(0, 0, 0, 0.03);
    z-index: -1;
    border-radius: 8px;

    @media (max-width: 768px) {
      top: 4px;
      left: 4px;
      right: -4px;
      bottom: -4px;
    }
  }
`;

const ProfileSections = () => (
  <ProfileGrid>
    <Panel>
      <Certifications />
    </Panel>
    <Panel>
      <Jobs />
    </Panel>
  </ProfileGrid>
);

export default ProfileSections; 