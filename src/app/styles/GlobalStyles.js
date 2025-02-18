import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 16px;
    
    @media (min-width: 768px) {
      font-size: 14px; // Slightly more zoomed out for tablets
    }
    
    @media (min-width: 1024px) {
      font-size: 11px; // More zoom out for desktop (~80%)
    }
  }

  html, body {
    background: ${props => props.theme.colors.panelBg};
    margin: 0;
    padding: 0;
    min-height: 100vh;
    overflow-x: hidden;
  }

  body {
    &.modal-open {
      overflow: hidden;
    }
  }

  #root {
    min-height: 100vh;
    background: ${props => props.theme.colors.panelBg};
    margin: 0 auto;
    padding: 0;
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      width: 95%;
      max-width: 1600px;
    }

    @media (min-width: 1024px) {
      width: 90%;
      max-width: 2000px; // Increased max-width to accommodate smaller font
    }
  }

  .container {
    flex: 1;
    width: 100%;
    margin: 0 auto;
    padding: 0.5rem;
    
    @media (min-width: 768px) {
      padding: 1rem;
    }
    
    @media (min-width: 1024px) {
      padding: 2rem;
    }
  }
`;

export default GlobalStyles; 