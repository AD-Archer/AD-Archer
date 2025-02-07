const GitHubStreak = () => {
  return (
    <div style={{ 
      textAlign: 'center', 
      marginBottom: '2rem',
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <a href="https://git.io/streak-stats" style={{ width: '100%', maxWidth: '1200px' }}>
        <img 
          src="https://streak-stats.demolab.com?user=ad-archer&theme=blood&mode=weekly&exclude_days=Sun%2CTue%2CSat" 
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