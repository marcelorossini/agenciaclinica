import styled from 'styled-components'
import { Upload, Check } from '@styled-icons/boxicons-regular'
import { Close } from '@styled-icons/ionicons-outline'

export const DragAndDropZone = styled.div`
  width: 100%;
  height: 100%;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  @media (min-width: 768px) {
    border: 1px solid var(--color-grey-light);

    ${({ isDragActive }) =>
      isDragActive &&
      `
        border: 1px solid var(--color-grey-mild);
    `}
  }
`

export const DrapAndDrop = styled.div`
  display: contents;
  outline: none;
  ${({ noClick }) =>
    !noClick &&
    `
    cursor: pointer;
  `}
  & > * {
    transition: 0.3s all;
    ${({ isDragActive }) =>
      isDragActive &&
      `
      background: #3498db10;
    `}
  }
`

export const DrapAndDropWrapper = styled.div`
  flex: auto;
  height: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-grey-mild);
`

export const FilesList = styled.ul`
  position: relative;
  margin: 12px;
  & > li {
    height: 40px;
    margin-top: 6px;
    padding: 0 0 0 12px;
    border: 1px solid var(--color-grey-light);
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    border-radius: 5px;
  }

  & > li > span {
    flex: auto;
    position: relative;
    z-index: 200;
    color: #34495e;
  }
`

export const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  width: ${({ position }) => (position ? `${position}%` : '0%')};
  height: 100px;
  background: ${({ position }) => (position !== 100 ? '#3498db40' : '#2ecc7150')};
  z-index: 100;
  transition: all 1s;
`

export const UploadIcon = styled(Upload)`
  width: 64px;
`

export const ButtonCancel = styled.button`
  position: relative;
  z-index: 200;
  cursor: pointer;
`

export const CloseIcon = styled(Close)`
  padding: 6px;
  width: 36px;
  height: 36px;
  color: red;
`

export const CheckIcon = styled(Check)`
  padding: 6px;
  width: 36px;
  height: 36px;
  color: #34495e;
`
