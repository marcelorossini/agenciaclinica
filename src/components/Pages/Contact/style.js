import styled, { createGlobalStyle, keyframes } from "styled-components";

export const Grid = styled.div`
  width: 100%;
  min-height: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const GridSocialLinks = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-auto-flow: column; 
  gap: 12px;
  
  @media (min-width: 768px) {    
    gap: 40px;
  }
`;

export const onHoverItem = keyframes`
  0% {
    transform: scale(1);
  }  
  30% {
    transform: scale(1.1);
    box-shadow: 0px 0px 20px 0px rgba(255,255,255,0.10);
  }
  40% {
    transform: scale(1.2);
  }
  50% {
    box-shadow: 0px 0px 80px 0px rgba(255,255,255,0.10);
    transform: scale(1);
  }
  60% {
    transform: scale(1.2);
    box-shadow: 0px 0px 20px 0px rgba(255,255,255,0.10);
  }
  80% {
    transform: scale(1);
  }    
`

export const Item = styled.a`
  cursor: pointer;
  
  & > svg {
    width: 56px;
    color: var(--color-secondary) !important;
    background: #ffffff;
    border-radius: 100%;
    padding: 12px;
  }

  & > svg:hover {
    animation: ${onHoverItem} 1.2s linear infinite;
  }

  @media (min-width: 576px) {
    & > svg {
      width: 96px;
    }
  }

  @media (min-width: 768px) {
    & > svg {
      width: 128px;
    }
  }
`;

export const Label = styled.p`
  display: block;
  color: #ffffff;
`