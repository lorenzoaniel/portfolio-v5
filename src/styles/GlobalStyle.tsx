import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      /* Hide scrollbar for Firefox */
      * {
        scrollbar-width: thin;
        -ms-overflow-style: thin; /* IE and Edge */
      }

      /* Hide scrollbar for Chrome and Edge */
      ::-webkit-scrollbar {
        display: thin;
}
  }

  body, html {
    width: 100vw;
    height: 100vh;
    #root {
      height: inherit;
      width: inherit;

      background: red;
    }
  }
`;
