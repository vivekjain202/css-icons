import styled from "styled-components";

export const Mobile = styled.div`
  width: 20px;
  height: 40px;
  border: 1px solid black;
  border-radius: 2px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 7px;
    height: 2px;
    border-radius: 2px;
    background: black;
    top: 2.5px;
    left: 6.5px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    border: 1px solid black;
    bottom: 2px;
    left: 8px;
  }
`;