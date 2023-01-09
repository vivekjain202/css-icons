import styled from "styled-components";

export const Mouse = styled.div`
    width: 30px;
    height: 40px;
    border-radius: 10px;
    background: black;
    position: relative;

    &:before{
        content: '';
        position: absolute;
        width: 3px;
        height: 10px;
        broder-radius: 1px;
        background: white;
        top: 3px;
        left: 13.5px;
    }

    &:after {
        content: '';
        position: absolute;
        width: 30px;
        height: 1px;
        background: white;
        top: 15px;
    }
`