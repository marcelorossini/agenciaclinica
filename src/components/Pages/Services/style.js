import styled from "styled-components";

export const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const List = styled.div`
  width: 100%;
  max-width: 228px;
  height: 100%;
  max-height: 364px;
  margin: auto auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 414px) {
    max-width: 768px;
    max-height: 480px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Item = styled.div`
  display: grid;
  width: 100%;
  max-width: 320px;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  gap: var(--size-padding-1x);

  @media (min-width: 768px) {
    width: auto;
    max-width: inherit;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    justify-items: center;
  }
`;

export const Image = styled.img`
  width: 48px;
  height: inherit;
  
  @media (min-width: 414px) {      
    width: 64px;
  }  

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
  color: #00A499;
  padding-bottom: 36px;
  @media (min-width: 768px) {
    padding-bottom: 0px;
  }
`
