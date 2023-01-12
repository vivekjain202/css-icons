import styled from "styled-components";

export const Calendar = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid black;
    border-top: 10px solid black;
    position: relative;

    &:before{
        content: '';
        position: absolute;
        width: 34px;
        height: 5px;
        border-left: 3px solid black;
        border-right: 3px solid black;
        top: -15px;
        left: 4px;
    }

    &:after{
        content: '';
        position: absolute;
        border: 2px solid black;
        bottom: 5px;
        right: 5px;
        box-shadow: -10px 0 0 black, -20px 0 0 black, -30px 0 0 black,
                    0px -10px 0 black, -10px -10px 0 black, -20px -10px 0 black, -30px -10px 0 black,
                    0px -20px 0 black, -10px -20px 0 black;
    }
`