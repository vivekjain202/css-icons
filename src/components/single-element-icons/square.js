import styled from "styled-components";

export const SquareIcon = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
`;

export const Square = {
  name: 'Square',
  id: 'square',
  component: SquareIcon,
  html: `<div class='square'></div>`,
  css: `
    .square{
      width: 50px;
      height: 50px;
      border: 1px solid black;
    }
  `
}