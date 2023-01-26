import styled from "styled-components";

export const PauseIcon = styled.div`
    width : 7px;
    height: 30px;
    background: black;
    border-radius: 5px;
    box-shadow: 13px 0 0 black;
`

export const Pause = {
    name: 'Pause',
    id: 'pause',
    component: PauseIcon,
    html: `<div class='pause'></div>`,
    css: `
        .pause {
            width : 7px;
            height: 30px;
            background: black;
            border-radius: 5px;
            box-shadow: 13px 0 0 black;
        }
    `
}