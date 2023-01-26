import styled from "styled-components";

export const ArrowToLeftIcon = styled.div`
  width: 32px;
  height: 4px;
  background: black;
  border-radius: 2px;
  border: 1px solid black;
  position: relative;

  &::before {
    content: "";
    width: 20px;
    height: 3px;
    position: absolute;
    background: black;
    top: 0px;
    left: 1px;
    border-radius: 2px;
    transform-origin: 0% 0%;
    transform: rotate(45deg);
  }

  &::after {
    content: "";
    width: 20px;
    height: 3px;
    position: absolute;
    background: black;
    top: 0px;
    left: -1px;
    border-radius: 2px;
    transform-origin: 0 0;
    transform: rotate(-45deg);
  }
`;

export const ArrowToRightIcon = styled(ArrowToLeftIcon)`
  transform: rotate(180deg);
`;

export const ArrowToUpIcon = styled(ArrowToLeftIcon)`
  transform: rotate(90deg);
`;

export const ArrowToDownIcon = styled(ArrowToLeftIcon)`
  transform: rotate(270deg);
`;


export const ArrowToLeft = {
  name: 'Arrow Left',
  id: 'arrow_to_left',
  component: ArrowToLeftIcon,
  html: `<div class='icon'></div>`,
  css: `.icon{
    width: 32px;
  height: 4px;
  background: black;
  border-radius: 2px;
  border: 1px solid black;
  position: relative; }

  .icon::before {
    content: "";
    width: 20px;
    height: 3px;
    position: absolute;
    background: black;
    top: 0px;
    left: 1px;
    border-radius: 2px;
    transform-origin: 0% 0%;
    transform: rotate(45deg);
  }

  .icon::after {
    content: "";
    width: 20px;
    height: 3px;
    position: absolute;
    background: black;
    top: 0px;
    left: -1px;
    border-radius: 2px;
    transform-origin: 0 0;
    transform: rotate(-45deg);
  }`
}

export const ArrowToRight = {
  name: 'Arrow Right',
  id: 'arrow_to_right',
  component: ArrowToRightIcon,
  html: `<div class='icon'></div>`,
  css: `.icon{
    width: 32px;
  height: 4px;
  background: black;
  border-radius: 2px;
  border: 1px solid black;
  position: relative; 
  transform: rotate(180deg);
  }

  .icon::before {
    content: "";
    width: 20px;
    height: 3px;
    position: absolute;
    background: black;
    top: 0px;
    left: 1px;
    border-radius: 2px;
    transform-origin: 0% 0%;
    transform: rotate(45deg);
  }

  .icon::after {
    content: "";
    width: 20px;
    height: 3px;
    position: absolute;
    background: black;
    top: 0px;
    left: -1px;
    border-radius: 2px;
    transform-origin: 0 0;
    transform: rotate(-45deg);
  }`
}

export const ArrowToUp = {
  name: 'Arrow Up',
  id: 'arrow_to_up',
  component: ArrowToUpIcon,
  html: `<div class='icon'></div>`,
  css: `.icon{
    width: 32px;
  height: 4px;
  background: black;
  border-radius: 2px;
  border: 1px solid black;
  position: relative; 
  transform: rotate(90deg);
  }

  .icon::before {
    content: "";
    width: 20px;
    height: 3px;
    position: absolute;
    background: black;
    top: 0px;
    left: 1px;
    border-radius: 2px;
    transform-origin: 0% 0%;
    transform: rotate(45deg);
  }

  .icon::after {
    content: "";
    width: 20px;
    height: 3px;
    position: absolute;
    background: black;
    top: 0px;
    left: -1px;
    border-radius: 2px;
    transform-origin: 0 0;
    transform: rotate(-45deg);
  }`
}

export const ArrowToDown = {
  name: 'Arrow Down',
  id: 'arrow_to_up',
  component: ArrowToDownIcon,
  html: `<div class='icon'></div>`,
  css: `.icon{
    width: 32px;
  height: 4px;
  background: black;
  border-radius: 2px;
  border: 1px solid black;
  position: relative; 
  transform: rotate(270deg);
  }

  .icon::before {
    content: "";
    width: 20px;
    height: 3px;
    position: absolute;
    background: black;
    top: 0px;
    left: 1px;
    border-radius: 2px;
    transform-origin: 0% 0%;
    transform: rotate(45deg);
  }

  .icon::after {
    content: "";
    width: 20px;
    height: 3px;
    position: absolute;
    background: black;
    top: 0px;
    left: -1px;
    border-radius: 2px;
    transform-origin: 0 0;
    transform: rotate(-45deg);
  }`
}