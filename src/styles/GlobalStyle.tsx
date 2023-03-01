import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
      /*
      * COLORS
        @@@@@@@@@@@ 
      */

      --scrollbarThumb-color: rgb(113, 201, 206);
      --scrollbar-color: rgb(227, 253, 253);

      --palette-color-light: rgb(227, 253, 253);
      --palette-color-medium: rgb(203, 241, 245);
      --palette-color-dark: rgb(166, 227, 233);
      --palette-color-darkest: rgb(113, 201, 206);


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
      z-index: 0;
	    backface-visibility: hidden;


      /* Hide scrollbar for Firefox */
      scrollbar-width: thin;
      -ms-overflow-style: thin; /* IE and Edge */

      /* Hide scrollbar for Chrome and Edge */
      &::-webkit-scrollbar {
        background-color: var(--scrollbar-color);
        width: 0.8rem;
        height: 0.8rem;
      }

      &::-webkit-scrollbar-thumb {
        background-color: var(--scrollbarThumb-color);
        border-radius: 0.4rem;
      }
  }

  html {
    width: 100%;
    height: fit-content;
    font-size: 62.5%;
    overflow-x: hidden;

    body{
      height: inherit;
      width: inherit;

      #root {
        height: inherit;
        width: inherit;
        font-size: 1.6rem;
      }
    }
  }
`;
