import styled from "styled-components";

// Principle :-
// To create a semi circle we need to first create a circle
// which can be achieved with border-radius
// now to give it a look of semi circle we cover the top part
// with a transparent box

export const SemiCircleIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid black;
  position: relative;
  box-sizing: border-box;
  background: black;

  &::after {
    content: "";
    position: absolute;
    background: white;
    border-bottom: 1px solid black;
    width: 50px;
    height: 50px;
    left: -1px;
    transform: translateY(-50%);
  }
`;


export const SemiCircle = {
  name: 'Semi Circle',
  id: 'semi_circle',
  component: SemiCircleIcon,
  html: `<div class='semiCircle'></div>`,
  css: `
    .semiCircle{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid black;
      position: relative;
      box-sizing: border-box;
    }

    .semiCircle::after {
      content: "";
      position: absolute;
      background: white;
      border-bottom: 1px solid black;
      width: 50px;
      height: 50px;
      left: -1px;
      transform: translateY(-50%);
    }
  `
}