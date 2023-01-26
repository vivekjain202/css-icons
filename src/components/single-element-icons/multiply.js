import styled from "styled-components";

export const MultiplySignIcon = styled.div`
  width: 7px;
  height: 40px;
  background: black;
  position: relative;
  border-radius: 2px;
  transform: rotate(45deg);
  
  &::before{
    content: '';
    width: 7px;
    height: 40px;
    position: absolute;
    top: 0px;
    background: black;
    transform: rotate(270deg);
    border-radius: 2px;
  }
`

export const MultiplySign = {
  name: 'Multiply',
  id: 'multiply',
  component: MultiplySignIcon,
  html: `<div class='multiply'></div>`,
  css: `
    .multiply {
      width: 7px;
      height: 40px;
      background: black;
      position: relative;
      border-radius: 2px;
      transform: rotate(45deg);
    }

    .multiply::before{
      content: '';
      width: 7px;
      height: 40px;
      position: absolute;
      top: 0px;
      background: black;
      transform: rotate(270deg);
      border-radius: 2px;
    }
  `
}