import styled from "styled-components";

export const CircleIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid black;
  background: black;
`;


export const Circle = {
    name: 'Circle',
    id: 'circle',
    component: CircleIcon,
    html: `<div class='circle'></div>`,
    css: `
        .circle {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 1px solid black;
            background: black;
        }
    `
}