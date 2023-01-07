import styled from "styled-components"

export const SunSolid = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: black;
  border: 1px solid black;

  box-shadow: 0 -25px 0 -6px black, 17px -17px 0 -6px black, 25px 0 0 -6px black,
    17px 17px 0 -6px black, 0 25px 0 -6px black, -17px 17px 0 -6px black,
    -25px 0 0 -6px black, -17px -17px 0 -6px black;
`;

export const SunSolidHorizon = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: black;
  border: 1px solid black;
  position: relative;

  box-shadow: 0 -25px 0 -6px black, 17px -17px 0 -6px black, 25px 0 0 -6px black,
    -25px 0 0 -6px black, -17px -17px 0 -6px black;

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