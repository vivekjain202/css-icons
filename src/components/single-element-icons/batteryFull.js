import styled from "styled-components";

export const BatteryFullIcon = styled.div`
  width: 27px;
  height: 17px;
  border: 1px solid black;
  border-radius: 0px 2px 2px 0px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 25px;
    height: 15px;
    background: black;
    top: 0px;
    left: 0px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 4px;
    right: -4px;
    width: 2px;
    height: 4px;
    border-radius: 0px 1px 1px 0px;
    border: 1px solid black;
    background: black;
  }
`;

export const BatteryFull = {
  name: 'Battery Full',
  id: 'battery_full',
  component: BatteryFullIcon,
  html: `<div class='batteryFull'></div>`,
  css: `
    .batteryFull{
      width: 27px;
      height: 17px;
      border: 1px solid black;
      border-radius: 0px 2px 2px 0px;
      position: relative;
    }

    .batteryFull::before {
      content: "";
      position: absolute;
      width: 25px;
      height: 15px;
      background: black;
      top: 0px;
      left: 0px;
    }

    .batteryFull::after {
      content: "";
      position: absolute;
      top: 4px;
      right: -4px;
      width: 2px;
      height: 4px;
      border-radius: 0px 1px 1px 0px;
      border: 1px solid black;
      background: black;
    }
  `
}