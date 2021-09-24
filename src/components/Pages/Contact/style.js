import styled, { keyframes } from "styled-components";

export const Grid = styled.div`
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px;
`

export const GridSocialLinks = styled.div`
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;  

  @media (min-width: 576px) {
    max-width: 740px;
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
      width: 128px;
    }
  }

  @media (min-width: 768px) {
    & > svg {
      width: 162px;
    }
  }
`;

export const Footer = styled.p`
  display: block;
  color: #ffffff;
  font-size: 12px;

  @media (min-width: 360px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }
`

export const Title = styled.h1`
  color: #ffffff;
`