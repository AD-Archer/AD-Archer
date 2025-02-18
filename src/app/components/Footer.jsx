// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import SocialIcons from './social/SocialIcons';

// Styled components for the footer
const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 2rem;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
`;

const FooterLinks = styled.div`
  margin-bottom: 1rem;
  
  a {
    color: ${({ theme }) => theme.colors.text};
    margin: 0 1rem;
    text-decoration: none;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
      </FooterLinks>
      <SocialIcons />
      <FooterText>
        &copy; {new Date().getFullYear()} Antonio Archer. All rights reserved.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;