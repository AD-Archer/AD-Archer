import styled from 'styled-components';
import GitHubStreak from './github-widgets/GitHubStreak';
import GitHubTopLanguages from './github-widgets/GitHubTopLang';

const GitHubStatsContainer = styled.div`
  display: flex;
  flex-direction: column; // Stack cards vertically
  align-items: center; // Center the cards horizontally
  gap: 0; // No gap between cards
  width: 100%;
  margin: 0;
  padding: 0;
  height: auto;
`;

const GitHubCard = styled.div`
  width: 100%; // Full width by default
  max-width: 800px; // Limit card width for better readability
  margin: 0; // No margin
  padding: 0;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: auto; // Maintain aspect ratio
    display: block;
    border: 0;
    padding: 0;
  }

  a {
    width: 100%;
    height: 100%;
    display: block;
    line-height: 0; // Remove phantom space under images
  }
`;

const GitHubStats = () => {
  return (
    <GitHubStatsContainer>
      <GitHubCard>
        <GitHubTopLanguages />
      </GitHubCard>
      <GitHubCard>
        <GitHubStreak />
      </GitHubCard>
    </GitHubStatsContainer>
  );
};

export default GitHubStats;