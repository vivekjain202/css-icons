import styled from "styled-components";

const MircochipIcon = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    border: 5px solid white;
    outline: 5px solid black;
    border-radius: 3px;
    background: black;

    &::before {
        content: '';
        position: absolute;
        width: 5px;
        height: 10px;
        border-radius: 3px;
        background: black;
        top: -17px;
        box-shadow: 13px 0 0 0 black, 26px 0 0 0 black,
                    0 54px 0 0 black,13px 54px 0 0 black,26px 54px 0 0 black;
    }

    &::after {
        content: '';
        position: absolute;
        width: 10px;
        height: 5px;
        border-radius: 3px;
        background: black;
        top: 0px;
        left: -17px;
        box-shadow: 0 13px 0 0 black, 0 26px 0 0 black,
                    54px 0 0 0 black, 54px 13px 0 0 black, 54px 26px 0 0 black;
    }
`

export const MicroChip = {
    name: 'Mircochip',
    id: 'microchip',
    component: MircochipIcon,
    html:`<div class='microchip'></div>`,
    css: `
        .microchip {
            position: relative;
            width: 40px;
            height: 40px;
            border: 5px solid white;
            outline: 5px solid black;
            border-radius: 3px;
            background: black;
        }

        .microchip::before {
            content: '';
            position: absolute;
            width: 5px;
            height: 10px;
            border-radius: 3px;
            background: black;
            top: -17px;
            box-shadow: 13px 0 0 0 black, 26px 0 0 0 black,
                        0 54px 0 0 black,13px 54px 0 0 black,26px 54px 0 0 black;
        }

        .microchip::after {
            content: '';
            position: absolute;
            width: 10px;
            height: 5px;
            border-radius: 3px;
            background: black;
            top: 0px;
            left: -17px;
            box-shadow: 0 13px 0 0 black, 0 26px 0 0 black,
                        54px 0 0 0 black, 54px 13px 0 0 black, 54px 26px 0 0 black;
        }
    `
}