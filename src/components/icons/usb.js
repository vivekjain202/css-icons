import styled from "styled-components";

export const USB = styled.div`
  width: 25px;
  height: 30px;
  border-radius: 0px 0px 3px 3px;
  border: 1px solid black;
  background: black;
  position: relative;

  &:before{
    content:'';
    position: absolute;
    border: 1px solid black;
    background: black;
    width: 14px;
    height: 10px;
    top: -11px;
    left: 4.5px;
  }

  &:after{
    content: '';
    position: absolute;
    width: 3px;
    height: 4px;
    border-left: 3px solid white;
    border-right: 3px solid white;
    top: -7px;
    left: 7.5px;
  }
`