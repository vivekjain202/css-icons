import styled from "styled-components";

const MagnetIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 2px;
    position: relative;
    border: 10px solid black;
    border-radius: 0 0 50% 50%;
    border-top: 0px;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        height: 7px;
        width: 10px;
        top: -9px;
        background: black;
        left: -10px;
        box-shadow: 30px 0 0 0 black;      
    }
`

export const Magnet = {
    name: 'Magnet',
    id: 'magnet',
    component: MagnetIcon,
    html: `<div class='magnet'></div>`,
    css: `
        .magnet {
            width: 30px;
            height: 30px;
            border-radius: 2px;
            position: relative;
            border: 10px solid black;
            border-radius: 0 0 50% 50%;
            border-top: 0px;
            position: relative;
        }

        .magnet::before {
            content: '';
            position: absolute;
            height: 7px;
            width: 10px;
            top: -9px;
            background: black;
            left: -10px;
            box-shadow: 40px 0 0 0 black;      
        }
    `
}