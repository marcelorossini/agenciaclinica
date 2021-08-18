import styled from "styled-components";

export const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
`;

export const Item = styled.div`
  & > svg {
      color: #ffffff;
    }
    `;
    
export const Label = styled.h1`
    font-size: 10px;
`

