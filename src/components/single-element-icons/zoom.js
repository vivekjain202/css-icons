import styled from "styled-components";

export const ZoomInIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 3px solid black;
  position: relative;

  &:after{
    content: '';
    position: absolute;
    width: 3px;
    height: 14px;
    background: black;
    bottom: -9px;
    right: -5px;
    transform: rotate(-45deg);
  }

  &:before{
    content: '+';
    font-size: 22px;
    position: absolute;
    top: -3px;
    left: 6px;
    color: black;
    font-weight: bolder;
  }
`

export const ZoomIn = {
  name: 'Zoom In',
  id: 'zoom_in',
  component: ZoomInIcon,
  html: `<div class='zoomIn'></div>`,
  css: `
    .zoomIn {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 3px solid black;
      position: relative;
    }

    .zoomIn::after{
      content: '';
      position: absolute;
      width: 3px;
      height: 14px;
      background: black;
      bottom: -9px;
      right: -5px;
      transform: rotate(-45deg);
    }

    .zoomIn::before{
      content: '+';
      font-size: 22px;
      position: absolute;
      top: -3px;
      left: 6px;
      color: black;
      font-weight: bolder;
    }
  `
}