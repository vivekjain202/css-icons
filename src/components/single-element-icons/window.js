import styled from "styled-components";

export const WindowsIcon = styled.div`
  width: 50px;
  height: 50px;
  background: black;
  position: relative;
  
  &::before {
    content: '';
    width: 50px;
    height: 4px;
    background: white;
    position: absolute;
    top: 23px;
  }
  
  &::after {
    content: '';
    width: 50px;
    height: 4px;
    background: white;
    position: absolute;
    top: 23px;
    transform: rotate(90deg);
  }
`