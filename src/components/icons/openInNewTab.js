import styled from "styled-components";

export const OpenInNewTab = styled.div`
  width: 17px;
  height: 12px;
  border: 1px solid black;
  position: relative;
  border-radius: 2px;
    
  &::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 10px;
    border: 1px solid black;
    top: -7px;
    left: 6px;
    background: white;
    border-radius: 2px;
  }
`