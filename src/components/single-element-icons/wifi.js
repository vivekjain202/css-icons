import styled from "styled-components";

const WifiIcon = styled.div`
    position: relative;
    width: 10px;
    height: 10px;
    background: black;
    border-radius: 50%;

    &::before {
        content: '';
        position: absolute;
        border: 3px solid black;
        border-color: #000 transparent transparent transparent;
        width: 30px;
        height: 20px;
        border-radius: 50%;
        top: -10px;
        left: -13px
    }

    &::after {
        content: '';
        position: absolute;
        border: 3px solid black;
        border-color: #000 transparent transparent transparent;
        width: 40px;
        height: 20px;
        border-radius: 50%;
        top: -20px;
        left: -18px
    }
`

export const Wifi = {
    name: 'Wifi',
    id: 'wifi',
    component: WifiIcon,
    html: ``,
    css: ``
}