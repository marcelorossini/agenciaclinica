import styled, { createGlobalStyle, keyframes } from "styled-components";

export const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto;
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
  width: calc(128px + (128px * 0.1));
  height: calc(128px + (128px * 0.1));
  overflow: hidden;
  border-radius: 100%;
  margin: 0 auto;
  transform: scale(.9);

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

export const ArrowButton = styled.a`
  width: 48px;
  height: 100%;
  z-index: 1000;
    
  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > div > svg {
    cursor: pointer;  
    color: #ffffff;
    width: 48px;
    transition: .3s all;
    transform: scale(1);
  }
  

  & > div > svg:hover {
    transform: scale(1.4);
  }  
`;

export const Title = styled.h1`
  color: #ffffff;
  width: 100%;
  text-align: center;
  font-size: 20px;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`