import styled from "styled-components";

export const A = styled.div`
  width: 1px;
  height: 13px;
  background: black;
  transform: rotate(90deg);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: -20px;
    width: 1px;
    height: 40px;
    background: black;
    transform: rotate(-75deg);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -9px;
    width: 1px;
    height: 40px;
    background: black;
    transform: rotate(75deg);
  }
`;