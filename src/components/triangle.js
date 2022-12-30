import styled from "styled-components";

export const SolidTriangle = styled.div`
  width: 0px;
  height: 0px;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 50px solid black;
`;

export const HollowTraingle = styled.div`
  width: 50px;
  height: 35.46px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid black;

  &::before {
    content: " ";
    position: absolute;
    top: 0px;
    height: 100%;
    width: 100%;
    border: 1px solid black;
    transform-origin: bottom left;
    transform: rotate(45deg);
  }
`;
