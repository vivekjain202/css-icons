import styled from "styled-components";

export const Star = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  border: 1px solid black;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    width: 50px;
    height: 50px;
    transform-origin: 50% 50%;
    transform: rotate(45deg);
    border: 1px solid black;
  }
`;