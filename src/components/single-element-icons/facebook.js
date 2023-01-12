import styled from "styled-components";

export const Facebook = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 5px;
    background: black;
    position: relative;

    &:before{
        content: '';
        position: absolute;
        width: 12px;
        height: 35px;
        background: transparent;
        top: 18px;
        left: 25px;
        border-left: 4px solid white; 
        border-top: 4px solid white;
        border-radius: 10px 0px 0 0;
    }

    &:after{
        content: '';
        position: absolute;
        width: 20px;
        height: 4px;
        background: white;
        top: 36px;
        left: 17px;
    }
`