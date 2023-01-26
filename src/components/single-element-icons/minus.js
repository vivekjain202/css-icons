import styled from "styled-components";

export const MinusSignIcon = styled.div`
  width: 7px;
  height: 40px;
  background: black;
  position: relative;
  border-radius: 2px;
  transform: rotate(270deg);
`

export const MinusSign = {
  name: 'Minus',
  id: 'minus',
  component: MinusSignIcon,
  html: `<div class='minus'></div>`,
  css: `
    .minus {
      width: 7px;
      height: 40px;
      background: black;
      position: relative;
      border-radius: 2px;
      transform: rotate(270deg);
    }
  `
}