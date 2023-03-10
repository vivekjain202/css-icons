import styled from "styled-components";

export const CrossSignIcon = styled.div`
  width: 50px;
  height: 50px;
  position: relative;

  &::before {
    content: " ";
    position: absolute;
    top: 0px;
    height: 100%;
    width: 100%;
    /* transfrom from center of bottom line */
    /* transform-origin : x-axis y-axis */
    transform-origin: 50% 100%;
    border-left: 1px solid black;
    transform: rotateZ(45deg);
  }

  &::after {
    content: " ";
    position: absolute;
    top: 0px;
    height: 100%;
    width: 100%;
    /* transfrom from center of bottom line */
    transform-origin: 50% 100%;
    border-right: 1px solid black;
    transform: rotateZ(-45deg);
  }
`;

export const CrossSign = {
  name: 'Cross Sign',
  id: 'cross',
  component: CrossSignIcon,
  html: `<div class='crossSign'></div>`,
  css: `
    .crossSign {
      width: 50px;
      height: 50px;
      position: relative;
    }
    
    .crossSign::before {
      content: " ";
      position: absolute;
      top: 0px;
      height: 100%;
      width: 100%;
      /* transfrom from center of bottom line */
      /* transform-origin : x-axis y-axis */
      transform-origin: 50% 100%;
      border-left: 1px solid black;
      transform: rotateZ(45deg);
    }

    .crossSign::after {
      content: " ";
      position: absolute;
      top: 0px;
      height: 100%;
      width: 100%;
      /* transfrom from center of bottom line */
      transform-origin: 50% 100%;
      border-right: 1px solid black;
      transform: rotateZ(-45deg);
    }
  `
}