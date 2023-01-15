import styled from "styled-components";

export const Focus = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid black;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 11.5px;
    left: -6px;
    width: 10px;
    height: 1px;
    background: black;
    border: 1px solid black;
    box-shadow: 27px 0px 0 0 black;
  }

  &::after {
    content: "";
    position: absolute;
    top: -2px;
    left: 7px;
    width: 10px;
    height: 1px;
    background: black;
    border: 1px solid black;
    transform: rotate(90deg);
    box-shadow: 27px 0px 0 0 black;
  }
`;