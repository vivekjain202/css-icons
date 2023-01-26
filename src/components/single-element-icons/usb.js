import styled from "styled-components";

export const USBIcon = styled.div`
  width: 27px;
  height: 32px;
  border-radius: 0px 0px 3px 3px;
  border: 1px solid black;
  background: black;
  position: relative;

  &:before{
    content:'';
    position: absolute;
    border: 1px solid black;
    background: black;
    width: 14px;
    height: 10px;
    top: -11px;
    left: 4.5px;
  }

  &:after{
    content: '';
    position: absolute;
    width: 3px;
    height: 4px;
    border-left: 3px solid white;
    border-right: 3px solid white;
    top: -7px;
    left: 7.5px;
  }
`

export const USB = {
  name: 'USB',
  id: 'usb',
  component: USBIcon,
  html: `<div class='usb'></div>`,
  css: `
    .usb{
      width: 27px;
      height: 32px;
      border-radius: 0px 0px 3px 3px;
      border: 1px solid black;
      background: black;
      position: relative;
    }

    .usb::before{
      content:'';
      position: absolute;
      border: 1px solid black;
      background: black;
      width: 14px;
      height: 10px;
      top: -11px;
      left: 4.5px;
    }

    .usb::after{
      content: '';
      position: absolute;
      width: 3px;
      height: 4px;
      border-left: 3px solid white;
      border-right: 3px solid white;
      top: -7px;
      left: 7.5px;
    }
  `
}