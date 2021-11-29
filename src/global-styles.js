import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: #808080;
    font-size: 1rem;
    font-family: "Open Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #000;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
    padding: 0;
  }
`;
