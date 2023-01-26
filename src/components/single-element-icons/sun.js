import styled from "styled-components"

export const SunSolidIcon = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: black;
  border: 1px solid black;

  box-shadow: 0 -20px 0 -6px black, 13px -13px 0 -6px black, 20px 0 0 -6px black,
    13px 13px 0 -6px black, 0 20px 0 -6px black, -13px 13px 0 -6px black,
    -20px 0 0 -6px black, -13px -13px 0 -6px black;
`;

export const SunSolid = {
  name: 'Sun Solid',
  id: 'sun_solid',
  component: SunSolidIcon,
  html: `<div class='sunSolid'></div>`,
  css: `
    .sunSolid {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: black;
      border: 1px solid black;

      box-shadow: 0 -20px 0 -6px black, 13px -13px 0 -6px black, 20px 0 0 -6px black,
        13px 13px 0 -6px black, 0 20px 0 -6px black, -13px 13px 0 -6px black,
        -20px 0 0 -6px black, -13px -13px 0 -6px black;
    }
  `
}