import styled from "styled-components";

export const Moon = styled.div`
  width: 50px;
  height: 50px;
  background: black;
  border-radius: 50%;
  position: relative;

  &:after {
    content:"";
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: white;
    left: 18px;
    top: -2px;
  }
`