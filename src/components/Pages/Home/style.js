import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 120%;
  transition: all .3s;
  top: 0;
  left: 0;  
  background: url("/assets/background.png");
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: left;
  z-index: 0;
  opacity: .3;
`

export const Lines = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;  
  background: url("/assets/lines2.svg");
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
  opacity: .08; 
`


export const Grid = styled.div`
  position: relative;
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
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
  justify-content: flex-end;
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

  &:hover {
    color: red;
  }
`;
