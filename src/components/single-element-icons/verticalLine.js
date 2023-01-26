import styled from "styled-components";

export const VerticalLineIcon = styled.div`
  width: 50px;
  height: 50px;
  border-right: 2px solid black;
`;

export const VerticalLine = {
    name: 'Vertical Line',
    id: 'vertical_line',
    component: VerticalLineIcon,
    html: `<div class='verticalLine'></div>`,
    css: `
        .verticalLine{
            width: 50px;
            height: 50px;
            border-right: 2px solid black;
        }
    `
}