import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --header-visibility: visible;
  }
  
  html {
    font-size: 16px;
    -webkit-text-size-adjust: 100%; /* Prevent font scaling in landscape */
    scroll-behavior: auto; /* Disable smooth scrolling to prevent scroll issues */
    
    @media (min-width: 768px) {
      font-size: 16px; // Keep standard size for tablets
      scroll-behavior: smooth; // Enable smooth scrolling on larger screens
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
    width: 100%;
    max-width: 100vw;
    -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
    position: relative; /* Ensure position context */
  }

  body {
    &.modal-open {
      overflow: hidden;
      position: fixed;
      width: 100%;
      height: 100%;
    }
  }

  /* Fix for mobile scroll position issues */
  @media (max-width: 768px) {
    html, body {
      height: auto !important;
      overflow-y: auto !important;
    }
    
    body {
      position: relative !important;
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
    overflow-x: hidden;

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
    overflow-x: hidden;
    
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
  
  /* Improve animation performance on mobile */
  @media (max-width: 768px) {
    * {
      will-change: auto !important; /* Reset will-change to improve performance */
      transform: translateZ(0); /* Force hardware acceleration for smoother animations */
    }
    
    /* Reduce animation complexity on mobile */
    .container > * {
      transform: none !important;
      transition: opacity 0.3s ease !important;
    }
  }
`;

export default GlobalStyles; 