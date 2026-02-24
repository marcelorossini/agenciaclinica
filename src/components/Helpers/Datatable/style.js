import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  font-size: 16px;
  font-weight: bold;
  color: var(--color-primary);
  text-align: left;
  padding: 12px 16px;
  border-bottom: 2px solid var(--color-primary, #333);

  ${({ $sortable }) =>
    $sortable &&
    `
    cursor: pointer;
    user-select: none;
    &:hover {
      opacity: 0.85;
    }
  `}
`;

export const Td = styled.td`
  font-size: 14px;
  cursor: pointer;
  color: var(--color-text-primary);
  padding: 12px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  ${Tr}:hover & {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

export const Empty = styled.div`
  min-height: 100px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-primary);
  padding: 24px;

  &:hover {
    text-decoration: underline;
  }
`;
