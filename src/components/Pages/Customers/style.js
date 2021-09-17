import styled, { createGlobalStyle, keyframes } from "styled-components";

export const Grid = styled.div`
  width: 100%;
  min-height: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const GridSocialLinks = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 12px;
  
  @media (min-width: 768px) {    
    grid-auto-flow: column; 
    gap: 40px;
  }
`;

export const Item = styled.a`
  width: 100%;
  cursor: pointer;  
  display: grid;
`;

export const ArrowButton = styled.a`
  width: 100%;
  cursor: pointer;  
  display: none;
  width: 64px;
  color: #ffffff;
  transform: scale(1);

  &:hover {
    transform: scale(1.1);
  }  

  @media (min-width: 768px) {
    display: block;
  }
`;


export const CostumerImage = styled.div`
  width: 128px;
  height: 128px;
  overflow: hidden;
  border-radius: 100%;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.1);
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