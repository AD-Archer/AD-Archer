import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled(motion.footer)`
  width: 100%;
  padding: 2rem 0;
  background: ${props => props.theme.colors.background};
  border-top: 1px solid ${props => props.theme.colors.border};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.9rem;

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${props => props.theme.colors.accent};
    }
  }
`;

const MainFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <FooterContent>
        <p>© {currentYear} Antonio Archer. All rights reserved.</p>
      </FooterContent>
    </FooterContainer>
  );
};

export default MainFooter; 