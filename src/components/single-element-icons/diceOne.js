import styled from "styled-components";

export const DiceOneIcon = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid grey;
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
    top: 12px;
    left: 12px;
  }
`

export const DiceOne = {
    name: 'Dice One',
    id: 'dice_one',
    component: DiceOneIcon,
    html: `<div class='diceOne'></div>`,
    css: `
        .diceOne {
            width: 30px;
            height: 30px;
            border: 1px solid grey;
            position: relative;
            border-radius: 2px;
            background: black;
        }

        .diceOne::before {
            content: '';
            position: absolute;
            width: 5px;
            height: 5px;
            background: white;
            border-radius: 50%;
            top: 12px;
            left: 12px;
          }
    `
}