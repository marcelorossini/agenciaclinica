import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-primary);
  border-radius: 5px;
  overflow: hidden;
`;

export const Tabs = styled.div`
  display: flex;
  background: var(--color-grey-light);
  border-bottom: 1px solid var(--color-primary);
`;

export const Tab = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  background: ${({ active }) => (active ? "#fff" : "transparent")};
  color: var(--color-text-primary);
  cursor: pointer;
  border-bottom: 2px solid
    ${({ active }) => (active ? "var(--color-primary)" : "transparent")};
  margin-bottom: -1px;

  &:hover {
    background: ${({ active }) => (active ? "#fff" : "rgba(255,255,255,0.5)")};
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 280px;
  padding: 12px;
  font-size: 13px;
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  border: none;
  outline: none;
  resize: vertical;
  background: #1e1e1e;
  color: #d4d4d4;
  box-sizing: border-box;
`;

export const PreviewWrapper = styled.div`
  width: 100%;
  min-height: 280px;
  padding: 0;
  background: #fff;
  overflow: auto;
`;

export const PreviewFrame = styled.iframe`
  width: 100%;
  min-height: 280px;
  border: none;
  display: block;
`;
