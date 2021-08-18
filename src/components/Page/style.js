import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: ${({ viewHeight }) =>
    viewHeight ? `calc(${viewHeight}px * 100)` : "100vh"};
    display: flex;
    background: ${({ backgroundColor }) => backgroundColor && backgroundColor};
`;
