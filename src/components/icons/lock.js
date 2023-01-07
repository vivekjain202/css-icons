import styled from "styled-components";

export const Lock = styled.div`
  width: 30px;
  height: 25px;
  background: black;
  position: relative;

  &:before{
    content: '';
    position: absolute;
    width: 14px;
    height: 10px;
    border-radius: 30% 30% 0 0;
    border: 3px solid black;
    background: white;
    top: -14px;
    left: 5px;
  }
`

export const LockOpen = styled.div`
  width: 30px;
  height: 25px;
  background: black;
  position: relative;

  &:before{
    content: '';
    position: absolute;
    width: 14px;
    height: 10px;
    border-radius: 30% 30% 0 0;
    border: 3px solid black;
    background: white;
    top: -13px;
    left: 5px;
  }

  &:after{
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    top: -5px;
    right: 5px;
    background: white;
  }
`