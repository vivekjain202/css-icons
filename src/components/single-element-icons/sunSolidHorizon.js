import styled from "styled-components";

export const SunSolidHorizonIcon = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: black;
  border: 1px solid black;
  position: relative;

  box-shadow: 0 -20px 0 -6px black, 13px -13px 0 -6px black, 20px 0 0 -6px black,
    -20px 0 0 -6px black, -13px -13px 0 -6px black;

  &::after {
    content: "";
    width: 55px;
    height: 2px;
    background: black;
    position: absolute;
    bottom: -1px;
    right: -21px;
  }
`;

export const SunSolidHorizon = {
    name: 'Sun Solid Horizon',
    id: 'sun_solid_horizon',
    component: SunSolidHorizonIcon,
    html: `<div class='sunSolidHorizon'></div>`,
    css: `
        .sunSolidHorizon {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: black;
            border: 1px solid black;
            position: relative;
          
            box-shadow: 0 -20px 0 -6px black, 13px -13px 0 -6px black, 20px 0 0 -6px black,
              -20px 0 0 -6px black, -13px -13px 0 -6px black;
        }

        .sunSolidHorizon::after {
            content: "";
            width: 55px;
            height: 2px;
            background: black;
            position: absolute;
            bottom: -1px;
            right: -21px;
          }
    `
}