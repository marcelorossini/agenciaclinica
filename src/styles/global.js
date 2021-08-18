import styled, { createGlobalStyle, keyframes } from "styled-components";

export default createGlobalStyle`
    :root {
        --color-primary: #00A499;
        --color-secondary: #2CD5C4;
        --color-tertiary: #74D2E7;
    }   

    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        background: var(--color-primary);        
    }

    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;        
        box-sizing: border-box;
    }

    ul {
     list-style: none;   
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    
    button {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
    }

    p {
        display: inline-block;
    }

    div, img, p, svg {
        transition: all .3s;
    }

    .fontSizePrimary {
        font-size: 16px;

        @media (min-width: 576px) {
            font-size: 24px;
        }

        @media (min-width: 768px) {
            font-size: 32px;
        }
    }

    .fontSizeSecondary {
        font-size: 16px;
   
        @media (min-width: 576px) {
            font-size: 20px;
        }

        @media (min-width: 768px) {
            font-size: 24px;
        }
    }    
`;

export const animationSlideUp = keyframes`
  0% {
      opacity: 0;
      transform: translateY(20px);
  }
  100% {
      opacity: 1;
      transform: translateY(0);
  }
`;

export const animationSlideLeft = keyframes`
  0% {
      opacity: 0;
      transform: translateX(20px);
  }
  100% {
      opacity: 1;
      transform: translateX(0);
  }
`;

export const animationSlideRight = keyframes`
  0% {
      opacity: 0;
      transform: translateX(-20px);
  }
  100% {
      opacity: 1;
      transform: translateX(0);
  }
`;

export const fadeIn = keyframes`
  0% {
      opacity: 0;
  }
  100% {
      opacity: 1;
  }
`;

export const fadeOut = keyframes`
  0% {
      opacity: 1;
  }
  100% {
      opacity: 0;
  }
`;
