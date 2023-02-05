import styled from "styled-components";

const MugSaucerIcon = styled.div`
    width: 30px;
    height: 30px;
    background: black;
    border-radius: 0 0 7px 7px;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        width: 40px;
        height: 3px;
        background: black;
        top: 33px;
        left: -5px;
        border-radius: 2px;
    }

    &::after {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: white;
        top: 7px;
        right: -7px;
        outline: 5px solid black;
    }
`

export const MugSaucer = {
    name: 'Mug Saucer',
    id: 'mug_saucer',
    component: MugSaucerIcon,
    html:`<div class='mugSaucer'></div>`,
    css:`
        .mugSaucer {
            width: 30px;
            height: 30px;
            background: black;
            border-radius: 0 0 7px 7px;
            position: relative;
        }

        .mugSaucer::before {
            content: '';
            position: absolute;
            width: 40px;
            height: 3px;
            background: black;
            top: 33px;
            left: -5px;
            border-radius: 2px;
        }

        .mugSaucer::after {
            content: '';
            position: absolute;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: white;
            top: 7px;
            right: -7px;
            outline: 5px solid black;
        }
    `
}