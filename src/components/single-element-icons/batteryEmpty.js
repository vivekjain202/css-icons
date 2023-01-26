import styled from "styled-components";

export const BatteryEmptyIcon = styled.div`
  width: 27px;
  height: 17px;
  border: 1px solid black;
  border-radius: 0px 2px 2px 0px;
  position: relative;

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

export const BatteryEmpty = {
    name: 'BatteryEmpty',
    id: 'battery_empty',
    component: BatteryEmptyIcon,
    html: `<div class='batteryEmpty'></div>`,
    css: `
        .batteryEmpty {
            width: 27px;
            height: 17px;
            border: 1px solid black;
            border-radius: 0px 2px 2px 0px;
            position: relative;
        }

        .batteryEmpty::after {
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