import styled from "styled-components";

export const Container = styled.div`
  grid-area: Sidebar;
  width: 100%;
  height: 100vh;
  background: var(--color-primary);
  box-shadow: 1px 0px 6px var(--color-shadow);
  color: var(--color-white);
  transition: all 0.3s;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto 1fr;
  padding: 24px;
  color: #ffffff;
  position: absolute;
  left: -100vw;
  z-index: 1000;
  ${({ open }) =>
    open &&
    `
      left: 0px;
    `}
  @media (min-width: 768px) {
    width: 280px;
    position: relative;
    left: 0;
  }
`;

export const Logo = styled.div`
  align-self: end;
  justify-self: center;

  & > img {
    width: 168px;
  }
`;

export const List = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > li {
    font-weight: bold;
    font-size: 18px;
    padding: 6px 0;
    cursor: pointer;
  }
`;

export const Username = styled.h3`
  text-align: center;
`;
export const CloseButton = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  width: 48px;
  margin: 12px 12px 0 0;
  & > svg {
    color: #ffffff;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
