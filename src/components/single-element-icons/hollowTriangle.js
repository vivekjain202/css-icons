import styled from "styled-components";

export const HollowTraingleIcon = styled.div`
  width: 50px;
  height: 35.46px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid black;

  &::before {
    content: " ";
    position: absolute;
    top: 0px;
    height: 100%;
    width: 100%;
    border: 1px solid black;
    transform-origin: bottom left;
    transform: rotate(45deg);
  }
`;

export const HollowTraingle = {
    name: 'Hollow Traingle',
    id: 'hollow_traingle',
    component: HollowTraingleIcon,
    html: `<div class='hollowTriangle'></div>`,
    css: `
        .hollowTriangle{
            width: 50px;
            height: 35.46px;
            position: relative;
            overflow: hidden;
            border-bottom: 1px solid black;
        }

        .hollowTriangle::before {
            content: " ";
            position: absolute;
            top: 0px;
            height: 100%;
            width: 100%;
            border: 1px solid black;
            transform-origin: bottom left;
            transform: rotate(45deg);
          }
    `
}