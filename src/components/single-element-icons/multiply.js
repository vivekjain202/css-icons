import styled from "styled-components";

export const MultiplySign = styled.div`
  width: 7px;
  height: 40px;
  background: black;
  position: relative;
  border-radius: 2px;
  transform: rotate(45deg);
  
  &::before{
    content: '';
    width: 7px;
    height: 40px;
    position: absolute;
    top: 0px;
    background: black;
    transform: rotate(270deg);
    border-radius: 2px;
  }
`