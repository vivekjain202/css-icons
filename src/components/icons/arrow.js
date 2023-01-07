import styled from "styled-components";

export const ArrowToLeft = styled.div`
  width: 32px;
  height: 4px;
  background: black;
  border-radius: 2px;
  border: 1px solid black;
  position: relative;

  &::before {
    content: "";
    width: 20px;
    height: 3px;
    position: absolute;
    background: black;
    top: 0px;
    left: 1px;
    border-radius: 2px;
    transform-origin: 0% 0%;
    transform: rotate(45deg);
  }

  &::after {
    content: "";
    width: 20px;
    height: 3px;
    position: absolute;
    background: black;
    top: 0px;
    left: -1px;
    border-radius: 2px;
    transform-origin: 0 0;
    transform: rotate(-45deg);
  }
`;

export const ArrowToRight = styled(ArrowToLeft)`
  transform: rotate(180deg);
`;

export const ArrowToUp = styled(ArrowToLeft)`
  transform: rotate(90deg);
`;

export const ArrowToDown = styled(ArrowToLeft)`
  transform: rotate(270deg);
`;