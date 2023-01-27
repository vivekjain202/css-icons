import styled from "styled-components";

const ClipboardIcon = styled.div`
    width: 40px;
    height: 40px;
    background: black;
    border-radius: 3px;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        width: 7px;
        height: 7px;
        top: -3px;
        left: 16.5px;
        border-radius: 50%;
        background: white;
        outline: 6px solid black;
    }

    &::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 2px;
        border-radius: 2;
        background: white;
        top: 13px;
        left: 10px;
    }
`

export const Clipboard = {
    name: 'Clipboard',
    id: 'clipboard',
    component: ClipboardIcon,
    html: `<div class='clipboard'></div>`,
    css: `
        .clipboard {
            width: 40px;
            height: 40px;
            background: black;
            border-radius: 3px;
            position: relative;
        }

        .clipboard::before {
            content: '';
            position: absolute;
            width: 7px;
            height: 7px;
            top: -3px;
            left: 16.5px;
            border-radius: 50%;
            background: white;
            outline: 6px solid black;
        }

        .clipboard::after {
            content: '';
            position: absolute;
            width: 20px;
            height: 2px;
            border-radius: 2;
            background: white;
            top: 13px;
            left: 10px;
        }
    `
}