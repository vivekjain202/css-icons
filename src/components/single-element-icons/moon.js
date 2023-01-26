import styled from "styled-components";

export const MoonIcon = styled.div`
  width: 50px;
  height: 50px;
  background: black;
  border-radius: 50%;
  position: relative;

  &:after {
    content:"";
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: white;
    left: 18px;
    top: -2px;
  }
`

export const Moon = {
  name: 'Moon',
  id: 'moon',
  component: MoonIcon,
  html: `<div class='moon'></div>`,
  css: `
    .moon {
      width: 50px;
      height: 50px;
      background: black;
      border-radius: 50%;
      position: relative;
    }

    .moon::after {
      content:"";
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: white;
      left: 18px;
      top: -2px;
    }
  `
}