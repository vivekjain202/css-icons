import styled from "styled-components";

export const NotAllowed = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius: 50%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    right: 13px;
    width: 1px;
    height: 30px;
    background: black;
    transform: rotate(-135deg);
  }
`;