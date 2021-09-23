import styled from "styled-components";

export const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const List = styled.div`
  width: fit-content;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: 1fr;
  align-items: center;

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
  gap: var(--size-padding-1x);

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    justify-items: center;
  }
`;

export const Image = styled.img`
  width: 64px;
  height: inherit;

  @media (min-width: 576px) {
    width: 90px;
    height: inherit;
  }

  @media (min-width: 768px) {
    width: inherit;
    height: 128px;
  }
`;

export const Label = styled.strong`
  color: #888888;
  
  @media (min-width: 768px) {
    width: 164px;
    text-align: center;
  }
`;

export const Title = styled.div`
  padding-bottom: 12px;
  color: #00A499;
  font-weight: bold;
  width: 100%;
  text-align: center;
  font-size: 26px;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`
