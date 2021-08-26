import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  display: grid;
  gap: 20px;
`;

export const Label = styled.label`
    margin-bottom: 12px;
    color: ${({ color }) => color || '#fff'};
`

export const Button = styled.button`
  border-radius: 5px;
  box-shadow: 1px 1px 3px #1f1f423d;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "46px"};
  margin: ${({ margin }) => margin || "0"};

  background: red;
  color: var(--color-blue-dark) !important;
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
`;

export const Input = styled.input`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "50px"};
  font-size: ${({ fontSize }) => fontSize || "14px"};
  text-align: ${({ textAlign }) => textAlign || "left"};
  margin-bottom: 12px;
  padding: 16px;
  border: 1px solid var(--color-grey-light);
  -webkit-appearance: none;
  border-radius: 5px;
  outline: none;
  transition: all 0.3s;
  &:not([data-error=""])::placeholder {
    color: var(--color-red-mild);
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
          border: 1px solid var(--color-blue-primary);
        }
        &:hover {
          border: 1px solid #b3b3b3;
        }
      `};
`;
