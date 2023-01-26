import styled from "styled-components";

export const ZoomOutIcon = styled.div`
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
    content: '-';
    font-size: 22px;
    position: absolute;
    top: -3px;
    left: 8px;
    color: black;
    font-weight: bolder;
  }
`

export const ZoomOut = {
    name: 'Zoom Out',
    id: 'zoom_out',
    component: ZoomOutIcon,
    html: `<div class='zoomOut'></div>`,
    css: `
        .zoomOut{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 3px solid black;
            position: relative;
        }

        .zoomOut::after{
            content: '';
            position: absolute;
            width: 3px;
            height: 14px;
            background: black;
            bottom: -9px;
            right: -5px;
            transform: rotate(-45deg);
        }

        .zoomOut::before{
            content: '-';
            font-size: 22px;
            position: absolute;
            top: -3px;
            left: 8px;
            color: black;
            font-weight: bolder;
          }
    `
}