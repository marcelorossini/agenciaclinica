import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  color: var(--color-text-primary);
`;

export const Error = styled.p`
  margin: 12px 0;
  height: 32px;
  color: #ffffff;
`;


export const Button = styled.button`
  border-radius: 5px;
  box-shadow: 1px 1px 3px #1f1f423d;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  width: 100%;
  height: ${({ height }) => height || "46px"};
  margin: ${({ margin }) => margin || "0"};
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;

  @media (min-width: 768px) {
    width: ${({ widthDesktop }) => widthDesktop || "100%"};
  }

  background: var(--color-primary);
  &:hover {
    background: var(--color-grey-light-hover);
  }
  &:disabled,
  &[disabled] {
    background: #fafafa;
    color: #79778b !important;
  }
`;

export const Form = styled.form`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const GroupInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;

    ${({ labelSize }) => labelSize && `    
      & > *:first-child {
        width: ${labelSize};
      }
    `};
  }
`

export const Input = styled.input`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "30px"};
  font-size: ${({ fontSize }) => fontSize || "14px"};
  text-align: ${({ textAlign }) => textAlign || "left"};
  padding: 16px;
  border: ${({ alternative }) => alternative ? "#ffffff" : "1px solid var(--color-primary)"};
  -webkit-appearance: none;
  border-radius: 5px;
  outline: none;
  transition: all 0.3s;

  &:not([data-error=""])::placeholder {
    color: #7f8c8d;
  }
  ${({ secondary }) =>
    secondary &&
    `
    border: none !important;
    border-radius: 0px;
    padding: 0px;
    margin: 0px;
    height: auto;
  `}
  ${({ error }) =>
    error
    ? `    
      border: 1px solid var(--color-red-mild) ;
    `
    : `
      &:focus {
        border: 1px solid var(--color-primary);
      }
      &:hover {
        border: 1px solid var(--color-primary);
      }
    `};
`;
