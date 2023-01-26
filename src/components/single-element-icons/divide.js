import styled from "styled-components";

export const DivideSignIcon = styled.div`
  width: 7px;
  height: 40px;
  background: black;
  position: relative;
  border-radius: 2px;
  transform: rotate(270deg);
  
  &::before{
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    top: 16px;
    left: 11px;
    border-radius: 50%;
    border: 5px solid black;
  }
  
  &::after{
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    top: 16px;
    left: -13px;
    border-radius: 50%;
    border: 5px solid black;
  }
`;

export const DivideSign = {
  name: 'Divide Sign',
  id: 'divide',
  component: DivideSignIcon,
  html: `<div class='divide'></div>`,
  css: `
    .divide {
      width: 7px;
      height: 40px;
      background: black;
      position: relative;
      border-radius: 2px;
      transform: rotate(270deg);
    }

    .divide::before{
      content: '';
      width: 0px;
      height: 0px;
      position: absolute;
      top: 16px;
      left: 11px;
      border-radius: 50%;
      border: 5px solid black;
    }

    .divide::after{
      content: '';
      width: 0px;
      height: 0px;
      position: absolute;
      top: 16px;
      left: -13px;
      border-radius: 50%;
      border: 5px solid black;
    }
  `
}