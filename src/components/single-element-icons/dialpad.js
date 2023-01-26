import styled from "styled-components";

export const DialpadIcon = styled.div`
    width: 0px;
    height: 0px;
    border: 2px solid black;
    box-shadow: -10px -10px 0 black, 0px -10px 0 black, 10px -10px 0 black, -10px 0px 0 black, 10px 0 0 black, -10px 10px 0 black, 0 10px 0 black, 10px 10px 0 black, 0 20px 0 black;
`

export const Dialpad = {
    name: 'Dialpad',
    id: 'dialpad',
    component: DialpadIcon,
    html: `<div class='dialPad'></div>`,
    css: `
        .dialPad {
            width: 0px;
            height: 0px;
            border: 2px solid black;
            box-shadow: -10px -10px 0 black, 0px -10px 0 black, 10px -10px 0 black, -10px 0px 0 black, 10px 0 0 black, -10px 10px 0 black, 0 10px 0 black, 10px 10px 0 black, 0 20px 0 black;
        }
    `
}