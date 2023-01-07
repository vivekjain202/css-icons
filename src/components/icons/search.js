import styled from "styled-components";

export const SearchIcon = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 3px solid black;
  position: relative;

  &:after{
    content: '';
    position: absolute;
    width: 3px;
    height: 12px;
    background: black;
    bottom: -9px;
    right: -5px;
    transform: rotate(-45deg);
  }
`