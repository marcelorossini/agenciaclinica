import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  //min-height: ${({ viewHeight }) => viewHeight ? `calc(${viewHeight}px * 100)` : "100vh"};
  min-height: 100vh;
  /* mobile viewport bug fix */
  display: flex;
  background: ${({ backgroundColor }) => backgroundColor && backgroundColor};

  @media not all and (min-resolution: .001dpcm) {
    @supports (-webkit-appearance:none) and (stroke-color: transparent) {
        min-height: -webkit-fill-available;       
    }
  }
`;
