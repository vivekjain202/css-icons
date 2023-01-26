import styled from "styled-components";

export const SolidTriangleIcon = styled.div`
  width: 0px;
  height: 0px;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 50px solid black;
`;


export const SolidTriangle = {
  name: 'Solid Triangle',
  id: 'solid_triangle',
  component: SolidTriangleIcon,
  html: `<div class='solidTriangle'></div>`,
  css: `
    .solidTriangle{
      width: 0px;
      height: 0px;
      border-left: 25px solid transparent;
      border-right: 25px solid transparent;
      border-bottom: 50px solid black;
    }
  `
}