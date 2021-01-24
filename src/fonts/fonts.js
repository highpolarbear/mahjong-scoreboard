import { createGlobalStyle } from "styled-components";

const regular = require("./TaipeiSansTC-Regular.ttf");
const light = require("./TaipeiSansTC-Light.ttf");
const bold = require("./TaipeiSansTC-Bold.ttf");

export default createGlobalStyle`
  @font-face {
    font-family: 'light';
    src: local('light'), url(${light}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'regular';
    src: local('regular'), url(${regular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }  

  @font-face {
    font-family: 'bold';
    src: local('bold'), url(${bold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  body {
    font-family: regular
  }
`;
