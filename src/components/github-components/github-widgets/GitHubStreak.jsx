// Do not use this file this is used to create github activity component

const GitHubStreak = () => {
  return (
    <div style={{ 
      textAlign: 'center', 
      marginBottom: '2rem',
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <a href="https://github.com/AD-Archer" style={{ width: '100%', maxWidth: '1200px' }}>
        <img 
          src="https://streaks.adarcher.app?user=ad-archer&theme=blood&mode=weekly&exclude_days=Sun%2CTue%2CSat" 
          alt="GitHub Streak" 
          style={{ 
            width: '100%',
            height: 'auto',
            maxWidth: '1200px'
          }}
        />
      </a>
    </div>
  );
};

export default GitHubStreak; 