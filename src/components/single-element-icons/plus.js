import styled from "styled-components";

export const PlusSignIcon = styled.div`
  width: 7px;
  height: 40px;
  background: black;
  position: relative;
  border-radius: 2px;
  
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

export const PlusSign = {
  name: 'Plus',
  id: 'plus',
  component: PlusSignIcon,
  html: `<div class='plus'></div>`,
  css: `
    .plus {
      width: 7px;
      height: 40px;
      background: black;
      position: relative;
      border-radius: 2px;
    }

    .plus::before{
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