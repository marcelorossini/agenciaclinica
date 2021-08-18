import styled, { createGlobalStyle, keyframes } from "styled-components";

export const Grid = styled.div`
  width: 100%;
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


export const CostumerImage = styled.img`
  width: 100%;
  max-width: 256px;
  border-radius: 100%;
  transform: scale(1);

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
  display: block;
  color: #ffffff;
`