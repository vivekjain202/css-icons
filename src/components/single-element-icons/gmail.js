import styled from "styled-components";

export const Gmail = styled.div`
  width: 50px;
  height: 50px;
  background: black;
  border-radius: 5px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 8px;
    left: 6px;
    width: 32px;
    height: 32px;
    border-left: 3px solid white;
    border-right: 3px solid white;
  }

  &::after {
    content: "";
    position: absolute;
    top: -2.5px;
    left: 12.5px;
    width: 22px;
    height: 22px;
    border-left: 3px solid white;
    border-bottom: 3px solid white;
    transform: rotate(-45deg);
  }
`;