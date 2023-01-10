import styled from "styled-components";

export const Youtube = styled.div`
    width: 50px;
    height: 40px;
    border-radius: 10px;
    background: black;
    position: relative;

    &:before{
        content: '';
        position: absolute;
        width: 0px;
        height: 0px;
        border-left: 12px solid white;
        border-top: 9px solid transparent;
        border-bottom: 9px solid transparent;
        border-right: 0px solid transparent;
        top: 11px;
        left: 19px;
    }
`