import styled from "styled-components";

export const StatsIcon = styled.div`
    width: 30px;
    height: 30px;
    border-left: 2px solid black;
    border-bottom: 2px solid black;
    border-bottom-left-radius: 2px;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        width: 2px;
        height: 15px;
        border-radius: 4px;
        bottom: 3px;
        background: black;
        left: 5px;
        box-shadow: 10px 0 0 0 black;
    }

    &:after {
        content: '';
        position: absolute;
        width: 2px;
        height: 20px;
        border-radius: 4px;
        bottom: 3px;
        background: black;
        left: 10px;
        box-shadow: 10px 0 0 0 black;
    }
`

export const Stats = {
    name:'Stats',
    id: 'stats',
    component: StatsIcon,
    html: `<div class='stats'></div>`,
    css: `
        .stats{
            width: 30px;
            height: 30px;
            border-left: 2px solid black;
            border-bottom: 2px solid black;
            border-bottom-left-radius: 2px;
            position: relative;
        }

        .stats::before {
            content: '';
            position: absolute;
            width: 2px;
            height: 15px;
            border-radius: 4px;
            bottom: 3px;
            background: black;
            left: 5px;
            box-shadow: 10px 0 0 0 black;
        }

        .stats::after {
            content: '';
            position: absolute;
            width: 2px;
            height: 20px;
            border-radius: 4px;
            bottom: 3px;
            background: black;
            left: 10px;
            box-shadow: 10px 0 0 0 black;
        }
    `
}