import styled from "styled-components";

export const GlobeIcon = styled.div`
    width: 50px;
    height: 50px;
    background: black;
    border-radius: 50%;
    position: relative;

    &:before {
      content:"";
      position: absolute;
      width: 20px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid white;
      top: 0px;
      left: 13px;
    }

    &:after{
      content: '';
      position: absolute;
      width: 50px;
      height: 20px;
      border-top: 2px solid white;
      border-bottom: 2px solid white;
      top: 13px;
    }
`

export const Globe = {
  name: 'Globe',
  id: 'globe',
  component: GlobeIcon,
  html:`<div class='globe'></div>`,
  css: `
    .globe {
      width: 50px;
      height: 50px;
      background: black;
      border-radius: 50%;
      position: relative;
    }

    .globe::before {
      content:"";
      position: absolute;
      width: 20px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid white;
      top: 0px;
      left: 13px;
    }

    .globe::after{
      content: '';
      position: absolute;
      width: 50px;
      height: 20px;
      border-top: 2px solid white;
      border-bottom: 2px solid white;
      top: 13px;
    }
  `
}