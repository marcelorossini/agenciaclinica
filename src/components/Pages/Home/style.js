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
  opacity: 0.4;  

  @media (min-width: 768px) {
    background: url("/assets/background-1080.png");
  }
  
  @media (min-width: 1024px) {
    mask-image: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.75) 50%, rgba(255,255,255,0) 70%);
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

  ${({ isAndroid }) => isAndroid && `
    padding-bottom: 60px;
  `}
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    width: 100%;
    //max-width: 256px;
  }

  @media (min-width: 576px) {
    & > img {
      max-width: 468px;
    }
  }

  @media (min-width: 576px) {
    justify-content: flex-end;
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
  min-height: 40px;
  color: #ffffff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 568px) {
    min-height: 56px;
  }
`;

export const NavbarItem = styled.div`
  color: #ffffff;
  margin: 0 24px 0 0;
  &:last-child {
    margin: 0;
  }
  &:hover {
    text-shadow: 0px 0px 20px rgb(255,255,255,0.5);
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

  &:hover {
    filter: brightness(110%);
  }

  @media (min-width: 768px) {
    padding: 8px;
    font-size: 20px;
  }
`;

export const TextModal = styled.div`
  font-size: 16px;
  padding-bottom: 20px;
  text-align: justify;
`

export const InformationTextModal = styled.div`
  width: 100%;
  align-self: flex-start;
  font-size: 14px;
  padding: 10px 0;
`
