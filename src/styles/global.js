import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url(https://fonts.googleapis.com/css?family=Dancing+Script|Homemade+Apple);
  @import url(https://fonts.googleapis.com/css?family=Dancing+Script);

  @font-face {
    font-family:'FonteLogo';
    src: url("../_fonts/bubblegum-sans-regular.otf");
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #ddd;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  .Landing-header h1 {
    font-family:'Dancing Script', cursive;
    font-size: 100pt;
    color: #003;
    justify-content: center;
    text-align: center;
    position:absolute;
		left:50%;
    top:50%;
    width: 600px;
		margin-left:-21.5%;
    margin-top:-110px;
    text-shadow: 10px 6px 10px gray;
  }

  .Landing-header h2 {
    font-family:'Dancing Script', cursive;
    font-size: 20pt;
    color: #003;
    justify-content: center;
    text-align: center;
    position:absolute;
		left:50%;
    top:50%;
    width: 600px;
		margin-left:-21.5%;
    margin-top: 35px;
    text-shadow: 10px 6px 10px gray;
  }

`;

export default GlobalStyle;
