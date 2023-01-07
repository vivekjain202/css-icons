import styled from "styled-components";

export const OpenInNewTab = styled.div`
  width: 25px;
  height: 17px;
  border: 1px solid black;
  position: relative;
  border-radius: 2px;
    
  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 15px;
    border: 1px solid black;
    top: -8px;
    left: 7px;
    background: white;
    border-radius: 2px;
  }
`