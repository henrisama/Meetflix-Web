import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }

  html, body{
    background-color: black;
    color: #d8d8d8;
  }

  html, body, #root{
    height: 100%;
  }

  a{
    text-decoration: none;
  }
`;
