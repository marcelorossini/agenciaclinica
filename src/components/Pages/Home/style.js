import styled, { keyframes } from "styled-components";

export const Background = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  transition: all 0.3s;
  top: 0;
  left: 0;
  background: url("/assets/background-576.png");
  background-size: auto 100% !important;
  background-repeat: no-repeat !important;
  background-position: left !important;
  z-index: 0;
  opacity: 0.3;

  @media (min-width: 768px) {
    background: url("/assets/background-1080.png");
  }

  @media (min-width: 1920px) {
    background: url("/assets/background-1440.png");
  }  

  @media (min-width: 2560px) {
    background: url("/assets/background-2160.png");
  }  

  @media not all and (min-resolution: .001dpcm) {
    @supports (-webkit-appearance:none) and (stroke-color: transparent) {
        min-height: -webkit-fill-available;       
    }
  }
`;

export const Lines = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: url("/assets/lines.svg");
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
  opacity: 0.08;
`;

export const Grid = styled.div`
  position: relative;
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto auto;
  z-index: 1000;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > img {
    width: 100%;
    max-width: 256px;
  }

  @media (min-width: 576px) {
    & > img {
      max-width: 468px;
    }
  }

  @media (min-width: 1024px) {
    & > img {
      max-width: 600px;
    }
  }

  @media (min-width: 1680px) {
    & > img {
      max-width: 768px;
    }
  }
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  @media (min-width: 576px) { 
    justify-content: flex-end;
  }
`;

export const Footer = styled.div`
  width: 100%;
  color: #ffffff;
  text-align: center;
`;

export const NavbarItem = styled.div`
  color: #ffffff;
  margin: 0 24px 0 0;
  &:last-child {
    margin: 0;
  }
`;

export const animationButton = keyframes`
  0% {
    transform: scale(1);
  }  
  30% {
    transform: scale(1.05);
  }
  40% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.1);
  }
  80% {
    transform: scale(1);
  }    
`;

export const Button = styled.div`
  width: 100%;
  max-width: 440px;
  justify-self: center;
  padding: 12px;
  text-align: center;
  color: #ffffff;
  background: #01a7c1;
  font-weight: bold;
  border-radius: 20px;
  margin-bottom: 16px;
  animation: ${animationButton} 2s linear infinite;
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 8px;
    font-size: 20px;
  }
`;

export const TextModal = styled.div`
  padding-bottom: 20px;
`

export const InformationTextModal = styled.div`
  width: 100%;
  align-self: flex-start;
  font-size: 14px;
  padding-bottom: 10px;
`
