import { createGlobalStyle } from 'styled-components';
import Roboto from './fonts/Roboto-Regular.ttf';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Roboto';
  src: url(${Roboto}) format('truetype');
  font-weight: normal;
  font-style: normal;
}

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Roboto, sans-serif;
  }

  body.fontLoaded {
    font-family: Roboto, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
  *:focus {
    outline: none !important;
    box-shadow: none !important;
  }
`;

export default GlobalStyle;
