import styled from "styled-components";

export const Grid = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: 1fr;
  align-items: center;
  min-height: 100%;
  
  @media (min-width: 768px) {
    width: 100%;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  gap: 20px;

  & > svg {
    width: 90px;
    color: #ffffff;
  }

  @media (min-width: 576px) {
    & > svg {
      width: 128px;
    }
  }

  @media (min-width: 768px) {
    & > svg {
      width: 148px;
    }

    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    justify-items: center;
  }
`;

export const Label = styled.strong`
  color: #ffffff;

  @media (min-width: 768px) {
    width: 164px;
    text-align: center;
  }  
`;
