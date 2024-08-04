import { createGlobalStyle } from "styled-components";
import backgroundImage from './background.jpg';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  margin: 0;
}

#root {
  font-family: "Montserrat", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  background-image: url(${backgroundImage});;
}

`;