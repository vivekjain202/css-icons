import styled from "styled-components";

export const DiceSixIcon = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  position: relative;
  border-radius: 2px;
  background: black;
  
  &::before {
    content: '';
    position: absolute;
    width: 0px;
    height: 0px;
    top: 5px;
    left: 5px;
    background: white;
    border: 2.5px solid white;
    border-radius: 50%;
    box-shadow: 14px 0px 0 0 white, 0px 7px 0 0 white, 14px 7px 0 0 white, 0px 14px 0 0 white, 14px 14px 0 0 white;
  }
`

export const DiceSix = {
  name: 'Dice Six',
  id: 'dice_six',
  component: DiceSixIcon,
  html: `<div class='diceSix'></div>`,
  css: `
    .diceSix {
      width: 30px;
      height: 30px;
      border: 1px solid black;
      position: relative;
      border-radius: 2px;
      background: black;
    }

    .diceSix::before {
      content: '';
      position: absolute;
      width: 0px;
      height: 0px;
      top: 5px;
      left: 5px;
      background: white;
      border: 2.5px solid white;
      border-radius: 50%;
      box-shadow: 14px 0px 0 0 white, 0px 7px 0 0 white, 14px 7px 0 0 white, 0px 14px 0 0 white, 14px 14px 0 0 white;
    }
  `
}