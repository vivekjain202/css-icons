import styled from "styled-components";

export const MouseIcon = styled.div`
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

export const Mouse = {
    name: 'Mouse',
    id: 'mouse',
    component: MouseIcon,
    html: `<div class='mouse'></div>`,
    css: `
        .mouse {
            width: 30px;
            height: 40px;
            border-radius: 10px;
            background: black;
            position: relative;
        }

        .mouse::before{
            content: '';
            position: absolute;
            width: 3px;
            height: 10px;
            broder-radius: 1px;
            background: white;
            top: 3px;
            left: 13.5px;
        }
        
        .mouse::after {
            content: '';
            position: absolute;
            width: 30px;
            height: 1px;
            background: white;
            top: 15px;
        }
    `
}