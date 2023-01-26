import styled from "styled-components";

export const HorizontalLineIcon = styled.div`
  width: 50px;
  height: 50px;
  border-bottom: 2px solid black;
`;

export const HorizontalLine = {
  name: 'Horizontal Line',
  id: 'horizontal_line',
  component: HorizontalLineIcon,
  html: `<div class='horizontalLine'></div>`,
  css: `
    .horizontalLine{
      width: 50px;
      height: 50px;
      border-bottom: 2px solid black;
    }
  `
}