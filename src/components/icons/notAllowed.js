import styled from "styled-components";

export const NotAllowed = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 50%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0px;
    right: 10px;
    width: 1px;
    height: 20px;
    background: black;
    transform: rotate(-135deg);
  }
`;