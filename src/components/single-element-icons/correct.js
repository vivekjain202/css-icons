import styled from "styled-components";

export const Correct = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background : black;
  position: relative;

  &:before{
    content: '';
    position: absolute;
    height: 13px;
    width: 25px;
    border-left: 4px solid white;
    border-bottom: 4px solid white;
    bottom: 20px;
    left: 10px;
    transform: rotate(-45deg)
  }
`