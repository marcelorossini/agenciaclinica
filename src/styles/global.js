import styled, { createGlobalStyle, keyframes } from 'styled-components'

export default createGlobalStyle`
    :root {
        --color-primary: #09a274;
        --color-secondary: #1cc2b8;
        --color-tertiary: #42dcba;
    }   

    * {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }

    html {
        box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
    box-sizing: inherit;
    }

    body {
        width: 100%;
        height: 100%;
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
`

export const animationSlideUp = keyframes`
  0% {
      opacity: 0;
      transform: translateY(20px);
  }
  100% {
      opacity: 1;
      transform: translateY(0);
  }
`

export const animationSlideLeft = keyframes`
  0% {
      opacity: 0;
      transform: translateX(20px);
  }
  100% {
      opacity: 1;
      transform: translateX(0);
  }
`

export const animationSlideRight = keyframes`
  0% {
      opacity: 0;
      transform: translateX(-20px);
  }
  100% {
      opacity: 1;
      transform: translateX(0);
  }
`

export const fadeIn = keyframes`
  0% {
      opacity: 0;
  }
  100% {
      opacity: 1;
  }
`

export const fadeOut = keyframes`
  0% {
      opacity: 1;
  }
  100% {
      opacity: 0;
  }
`
