import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    width: 400px;
    padding: 25px;
    padding-bottom: 80px;
    margin: 20px auto 0 auto;
    text-align: center;
  }
`;
