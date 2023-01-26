import styled from "styled-components";

export const LaptopIcon = styled.div`
  width: 50px;
  height: 35px;
  border-top: 4px double black;
  border-left: 4px double black;
  border-right: 4px double black;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: black;
    top: 3px;
    left: 21px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 62px;
    height: 10px;
    border: 2px solid black;
    border-radius: 0px 0px 5px 5px;
    bottom: -12px;
    left: -12px;
  }
`;

export const Laptop = {
  name: 'Laptop',
  id: 'laptop',
  component: LaptopIcon,
  html: `<div class='laptop'></div>`,
  css: `
    .laptop {
      width: 50px;
      height: 35px;
      border-top: 4px double black;
      border-left: 4px double black;
      border-right: 4px double black;
      position: relative;
    }

    .laptop::before {
      content: "";
      position: absolute;
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: black;
      top: 3px;
      left: 21px;
    }

    .laptop::after {
      content: "";
      position: absolute;
      width: 62px;
      height: 10px;
      border: 2px solid black;
      border-radius: 0px 0px 5px 5px;
      bottom: -12px;
      left: -12px;
    }
  `
}