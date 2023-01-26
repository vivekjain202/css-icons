import styled from "styled-components";

export const FolderIcon = styled.div`
  width: 40px;
  height: 25px;
  background: black;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 13px;
    height: 4px;
    top: -5px;
    border-radius: 3px 3px 0px 0px;
    border: 2px solid black;
    background: black;
  }
`;

export const Folder = {
  name: 'Folder',
  id: 'folder',
  component: FolderIcon,
  html: `<div class='folder'></div>`,
  css: `
    .folder {
      width: 40px;
      height: 25px;
      background: black;
      position: relative;
    }

    .folder::before {
      content: "";
      position: absolute;
      width: 13px;
      height: 4px;
      top: -5px;
      border-radius: 3px 3px 0px 0px;
      border: 2px solid black;
      background: black;
    }
  `
}