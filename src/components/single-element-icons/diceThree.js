import styled from "styled-components";

export const DiceThreeIcon = styled.div`
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
    top: 4px;
    left: 4px;
    background: white;
    border: 2.5px solid white;
    border-radius: 50%;
    box-shadow: 8px 8px 0 0 white, 16px 16px 0 0 white;
  }
`

export const DiceThree = {
    name: 'Dice Three',
    id: 'dice_three',
    component: DiceThreeIcon,
    html: `<div class='diceThree'></div>`,
    css: `
        .diceThree{
            width: 30px;
            height: 30px;
            border: 1px solid black;
            position: relative;
            border-radius: 2px;
            background: black;
        }

        .diceThree::before {
            content: '';
            position: absolute;
            width: 0px;
            height: 0px;
            top: 4px;
            left: 4px;
            background: white;
            border: 2.5px solid white;
            border-radius: 50%;
            box-shadow: 8px 8px 0 0 white, 16px 16px 0 0 white;
          }
    `
}