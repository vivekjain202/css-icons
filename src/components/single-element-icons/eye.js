import styled from "styled-components";

export const Eye = styled.div`
  width: 50px;
  height: 30px;
  border-radius: 50%;
  background: black;
  position: relative;

  &:before{
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 3px solid white;
    background: black;
    top : 8px;
    left: 18px;
  }
`