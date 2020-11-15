import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F2F5 ;
    -webkit-font-smoothing: antialiased;
    color: #333;
  }

  body, input, button {
    font: 16px/1 'Mukta', sans-serif;
  }

  button {
    cursor: pointer;
  }

  img {
    vertical-align: middle;
  }
`;
