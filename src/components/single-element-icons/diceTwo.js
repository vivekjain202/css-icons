import styled from "styled-components";

export const DiceTwoIcon = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  position: relative;
  border-radius: 2px;
  background: black;
  
  &::before {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background: white;
    border-radius: 50%;
    top: 4px;
    left: 4px;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background: white;
    border-radius: 50%;
    top: 19px;
    left: 19px;
  }
`

export const DiceTwo = {
    name: 'Dice Two',
    id: 'dice_two',
    component: DiceTwoIcon,
    html: `<div class='diceTwo'></div>`,
    css: `
        .diceTwo {
            width: 30px;
            height: 30px;
            border: 1px solid black;
            position: relative;
            border-radius: 2px;
            background: black;
        }

        .diceTwo::before {
            content: '';
            position: absolute;
            width: 5px;
            height: 5px;
            background: white;
            border-radius: 50%;
            top: 4px;
            left: 4px;
        }

        .diceTwo::after {
            content: '';
            position: absolute;
            width: 5px;
            height: 5px;
            background: white;
            border-radius: 50%;
            top: 19px;
            left: 19px;
        }

    `
}