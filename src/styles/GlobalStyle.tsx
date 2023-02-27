import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
      /*
      * COLORS
        @@@@@@@@@@@ 
      */

      --scrollbarThumb-Purple: #7600a0;
      --scrollbar-Purple: #bb00ff;

      --palette-purple-1: #280037;
      --palette-purple-2: #42005a;
      --palette-purple-3: #5c007d;
      --palette-purple-4: #73009d;
      --palette-purple-5: #8c00bf;
      --palette-purple-6: #a800e6;

      --glass-white-light: rgba(255, 255, 255, 0.2);
      --glass-white-medium: rgba(255, 255, 255, 0.5);
      --glass-white-dark: rgba(255, 255, 255, 0.8);

      /*
      * FONTS
        @@@@@@@@@@@ 
      */

      --default-font-button-size: clamp(1.5rem, 5vw, 3rem); 

      /*
      * NORMALIZE
        @@@@@@@@@@@ 
      */

      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Roboto';
      font-size: clamp(1.6rem, 5vw, 3.5rem);

      /* Hide scrollbar for Firefox */
      scrollbar-width: thin;
      -ms-overflow-style: thin; /* IE and Edge */

      /* Hide scrollbar for Chrome and Edge */
      &::-webkit-scrollbar {
        background-color: var(--scrollbar-Purple);
        width: 0.8rem;
        height: 0.8rem;
      }

      &::-webkit-scrollbar-thumb {
        background-color: var(--scrollbarThumb-Purple);
        border-radius: 0.4rem;
      }
  }

  html {
    width: 100%;
    height: 100vh;
    font-size: 62.5%;

    body{
      height: 100%;
      width: 100%;

      #root {
        height: inherit;
        width: inherit;

        background: red;
        font-size: 1.6rem;
      }
    }
  }
`;
