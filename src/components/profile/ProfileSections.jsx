import Certifications from './Certifications';
import Jobs from './Jobs';
import styled from 'styled-components';

const ProfileGrid = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: start;
    max-width: 1400px;
    margin: 0 auto;
  }
`;

const ProfileSections = () => (
  <ProfileGrid>
    <Certifications />
    <Jobs />
  </ProfileGrid>
);

export default ProfileSections; 