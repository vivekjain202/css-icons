import styled from "styled-components";

export const FileIcon = styled.div`
  width: 20px;
  height: 30px;
  color: black;
  background: black;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    top: 0px;
    right: 0px;
    border-right: 7px solid white;
    border-bottom: 7px solid white;
    background: white;
  }

  &::after {
    content: "";
    position: absolute;
    height: 10px;
    top: -1px;
    right: 3px;
    border-right: 1px solid black;
    transform: rotate(-45deg);
  }
`;

export const File = {
  name: 'File',
  id: 'file',
  component: FileIcon,
  html: `<div class='file'></div>`,
  css: `
    .file {
      width: 20px;
      height: 30px;
      color: black;
      background: black;
      position: relative;
    }

    .file::before {
      content: "";
      position: absolute;
      width: 0px;
      height: 0px;
      top: 0px;
      right: 0px;
      border-right: 7px solid white;
      border-bottom: 7px solid white;
      background: white;
    }

    .file::after {
      content: "";
      position: absolute;
      height: 10px;
      top: -1px;
      right: 3px;
      border-right: 1px solid black;
      transform: rotate(-45deg);
    }
  `
}