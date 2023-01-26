import styled from "styled-components";

export const BatteryHalfEmptyIcon = styled.div`
  width: 27px;
  height: 17px;
  border: 1px solid black;
  border-radius: 0px 2px 2px 0px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 15px;
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
  }
`;


export const BatteryHalfEmpty = {
    name: 'Battery Half Empty',
    id: 'battery_half_empty',
    component: BatteryHalfEmptyIcon,
    html: `<div class='batteryHalfEmpty'></div>`,
    css: `
        .batteryHalfEmpty{
            width: 27px;
            height: 17px;
            border: 1px solid black;
            border-radius: 0px 2px 2px 0px;
            position: relative;
        }

        .batteryHalfEmpty::before {
            content: "";
            position: absolute;
            width: 15px;
            height: 15px;
            background: black;
            top: 0px;
            left: 0px;
        }

        .batteryHalfEmpty::after {
            content: "";
            position: absolute;
            top: 4px;
            right: -4px;
            width: 2px;
            height: 4px;
            border-radius: 0px 1px 1px 0px;
            border: 1px solid black;
          }

    `
}