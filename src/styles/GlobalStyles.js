import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --header-visibility: visible;
  }
  
  html {
    font-size: 16px;
    
    @media (min-width: 768px) {
      font-size: 16px; // Keep standard size for tablets
    }
    
    @media (min-width: 1024px) {
      font-size: 16px; // Keep standard size for desktop
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
      max-width: 1800px;
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

  /* Add this rule to hide the header when preview is active */
  body.modal-open header {
    visibility: var(--header-visibility) !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }
`;

export default GlobalStyles; 