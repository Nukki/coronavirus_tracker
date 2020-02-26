import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-touch-callout: none;
    user-select: none;
  }

  body.fontLoaded {
    font-family: 'Tomorrow', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #000;
    min-height: 100%;
    min-width: 100%;
  }
`;

export default GlobalStyle;
