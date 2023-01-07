import styled from "styled-components";

export const Globe = styled.div`
    width: 50px;
    height: 50px;
    background: black;
    border-radius: 50%;
    position: relative;

    &:before {
      content:"";
      position: absolute;
      width: 20px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid white;
      top: 0px;
      left: 13px;
    }

    &:after{
      content: '';
      position: absolute;
      width: 50px;
      height: 20px;
      border-top: 2px solid white;
      border-bottom: 2px solid white;
      top: 13px;
    }
`