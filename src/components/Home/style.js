import styled from "styled-components";

export const Grid = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > img {
    width: 100%;
    max-width: 256px;
    transition: 0.3s all;
  }

  @media (min-width: 576px) {
    & > img {
      max-width: 468px;
    }
  }

  @media (min-width: 768px) {
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
  display: flex;
  justify-content: center;
  font-size: 16px;
  color: #ffffff;
  font-size: 16px;
  transition: 0.3s all;

  @media (min-width: 576px) {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const NavbarItem = styled.div`
  font-size: 18px;
  color: #ffffff;
  margin: 0 24px 0 0;
  transition: 0.3s all;
  &:last-child {
    margin: 0;
  }

  &:hover {
    color: red;
  }

  @media (min-width: 576px) {
    font-size: 24px;
  }

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;
