import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-x: hidden;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    /* Mobile viewport fixes */
    @media (max-width: 768px) {
      overflow-x: hidden;
      width: 100%;
      position: relative;
    }
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  /* Scrollbar styles */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.backgroundSecond};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.firstColor};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.hover};
  }

  /* Mobile fixes for component visibility */
  @media (max-width: 768px) {
    section {
      width: 100% !important;
      max-width: 100vw !important;
      overflow-x: hidden !important;
    }
    
    /* Ensure all containers are properly sized on mobile */
    div[id*="certifications"] {
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      width: 100% !important;
      min-height: auto !important;
    }
  }
`;
