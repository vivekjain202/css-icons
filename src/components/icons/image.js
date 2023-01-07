import styled from "styled-components";

export const Image = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background: black;
  position: relative;

  &:after{
    content: '';
    position: absolute;
    width: 22px;
    height: 32px;
    top: 26px;
    left: 17px;
    border-left: 5px solid white;
    border-top: 5px solid white;
    transform: rotate(42deg);
  }

  &:before{
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: white;
    border-radius: 50%;
    top: 8px;
    left: 7px;
  }
`