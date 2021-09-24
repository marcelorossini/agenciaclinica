import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
`;

export const BackgroundItem = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: block;
    flex: 1;
    height: 100%;
    background: ${({ backgroundColor }) => backgroundColor && backgroundColor};
  }
`;

export const Grid = styled.div`
  width: 100%;
  max-width: var(--size-max-width);
  min-height: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const WrapperItem = styled.div`
  flex-basis: 100%;
  height: 100%;
  background: ${({ backgroundColor }) => backgroundColor && backgroundColor};
  display: flex;
  align-items: center;
  justify-items: center;
`;

export const Item = styled.div`
  max-width: 400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1px auto;
  gap: var(--size-padding-1x);
  align-items: center;
  justify-items: center;
  text-align: center;
  padding: 40px;

  @media (min-width: 992px) {
    grid-template-rows: 1fr auto 1px 1fr;
  }
`;

export const Image = styled.img`
  height: 128px;
  @media (min-width: 576px) {
    align-self: end;
    height: 156px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: #ffffff;
`;

export const Title = styled.strong`
  color: #ffffff;
  display: block;

  @media (min-width: 768px) {
    max-width: 220px;
  }
`;

export const Description = styled.p`
  align-self: start;
  color: #ffffff;
  display: block;
`;
