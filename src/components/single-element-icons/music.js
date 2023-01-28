import styled from "styled-components";

const MusicIcon = styled.div`
    width: 35px;
    height: 10px;
    background: black;
    border-radius: 2px;
    position: relative;
    transform: rotate(-15deg) translateY(-13px);

    &::before {
        content: '';
        position: absolute;
        width: 3px;
        height: 20px;
        background: black;
        top: 9px;
        border-radius: 0 0 50% 0;
        box-shadow: 32px 0 0 0 black;
    }

    &::after {
        content: '';
        position: absolute;
        width: 9px;
        height: 9px;
        background: black;
        border-radius: 50% 0 0 50%;
        top: 22px;
        left: -6px;
        box-shadow: 32px 0 0 0 black;
    }
`

export const Music = {
    name: 'Music',
    id: 'music',
    component: MusicIcon,
    html: `<div class='music'></div>`,
    css: `
        .music {
            width: 35px;
            height: 10px;
            background: black;
            border-radius: 2px;
            position: relative;
            transform: rotate(-15deg) translateY(-13px); // translateX is just to place icon in center of icon container
        }

        .music::before {
            content: '';
            position: absolute;
            width: 3px;
            height: 20px;
            background: black;
            top: 9px;
            border-radius: 0 0 50% 0;
            box-shadow: 32px 0 0 0 black;
        }

        .music::after {
            content: '';
            position: absolute;
            width: 9px;
            height: 9px;
            background: black;
            border-radius: 50% 0 0 50%;
            top: 22px;
            left: -6px;
            box-shadow: 32px 0 0 0 black;
        }
    `
}