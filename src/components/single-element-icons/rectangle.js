import styled from "styled-components";

export const ReactangleIcon = styled.div`
  width: 50px;
  height: 40px;
  border: 1px solid black;
`;

export const Reactangle = {
  name: 'Reactangle',
  id: 'rectangle',
  component: ReactangleIcon,
  html: `<div class='rectangle'></div>`,
  css: `
    .rectangle{
      width: 50px;
      height: 40px;
      border: 1px solid black;
    }
  `
}