import styled from "styled-components";

export const Wrong = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background : black;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    height: 34px;
    width: 5px;
    top: 17%;
    left: 45%;
    background: white;
    transform: rotate(-45deg)
  }

  &:after {
    content: '';
    position: absolute;
    height: 34px;
    width: 5px;
    top: 17%;
    right: 45%;
    background: white;
    transform: rotate(45deg)
  }
`