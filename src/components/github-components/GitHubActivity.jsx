import { motion } from 'framer-motion';
import GitHubStreak from './github-widgets/GitHubStreak';
import { theme } from '../../styles/theme';

const GitHubActivity = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '4rem auto',
        padding: '2rem',
        background: 'white',
        border: '3px solid black',
        boxShadow: theme.shadows.comic,
        borderRadius: '10px'
      }}
    >
      <motion.h2
        style={{
          fontFamily: theme.fonts.title,
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          color: theme.colors.accent,
          marginBottom: '2rem',
          textAlign: 'center'
        }}
      >
        GITHUB ACTIVITY
      </motion.h2>
      <GitHubStreak />
    </motion.div>
  );
};

export default GitHubActivity; 