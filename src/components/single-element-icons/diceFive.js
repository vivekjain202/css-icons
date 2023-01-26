import styled from "styled-components";

export const DiceFiveIcon = styled.div`
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
    box-shadow: 14px 0px 0 0 white, 7px 7px 0 0 white, 0px 14px 0 0 white, 14px 14px 0 0 white;
  }
`

export const DiceFive = {
    name: 'Dice Five',
    id: 'dice_five',
    component: DiceFiveIcon,
    html: `<div class='diceFive'></div>`,
    css: `
        .diceFive {
            width: 30px;
            height: 30px;
            border: 1px solid black;
            position: relative;
            border-radius: 2px;
            background: black;
        }

        .diceFive::before {
            content: '';
            position: absolute;
            width: 0px;
            height: 0px;
            top: 5px;
            left: 5px;
            background: white;
            border: 2.5px solid white;
            border-radius: 50%;
            box-shadow: 14px 0px 0 0 white, 7px 7px 0 0 white, 0px 14px 0 0 white, 14px 14px 0 0 white;
          }
    `
}