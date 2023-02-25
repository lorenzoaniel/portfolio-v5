import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-size: 62.5%;

      /* Hide scrollbar for Firefox */
      
      scrollbar-width: none;
      -ms-overflow-style: none; /* IE and Edge */

      /* Hide scrollbar for Chrome and Edge */
      ::-webkit-scrollbar {
        display: none;  
      }
  }

  html {
    width: 100%;
    height: 100vh;
    
    
  }

  body {
      overflow-x: hidden;
      height: 100%;
      width: 100%;
  }

  #root {
    height: inherit;
    max-width: inherit;

    background: red;
  }
`;
