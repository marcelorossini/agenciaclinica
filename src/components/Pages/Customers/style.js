import styled, { createGlobalStyle, keyframes } from "styled-components";

export const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr;
  align-items: center;
  justify-content: center;
`

export const Item = styled.a`
  width: 100%;
  cursor: pointer;  
  display: grid;
  text-align: center;
  position: relative;
  z-index: 0;
`;

export const CostumerImage = styled.div`
  width: 180px;
  height: 180px;
  overflow: hidden;
  border-radius: 100%;
  margin: 0 auto;
  transform: scale(.9);

  @media (min-width: 576px) { 
    width: 100px;
    height: 100px;
  }

  @media (min-width: 768px) { 
    width: 180px;
    height: 180px;
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1);
  }
`

export const CostumerName = styled.p`
  display: block;
  color: #ffffff;
  font-weight: bold;
  padding: 10px 0 0 0;
`

export const CostumerOccupation = styled.p`
  height: 10px;
  display: block;
  color: #ffffff;
`

export const Title = styled.h1`
  color: #ffffff;
`