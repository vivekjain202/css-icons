import styled from 'styled-components'

const AirplayIcon = styled.div`
    width: 60px;
    height: 40px;
    border-radius: 5px;
    border: 5px solid black;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        bottom: -11px;
        left: 10px;
        z-index: 1;
        border-radius: 5px;
        border-bottom: 20px solid black;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
    }
`

export const Airplay = {
    name: 'Airplay',
    id: 'airplay',
    component: AirplayIcon,
    html: `<div class='airplay'></div>`,
    css: `
        .airplay {
            width: 50px;
            height: 30px;
            border-radius: 5px;
            border: 5px solid black;
            position: relative;
        }
        
        .airplay:after{
            content: '';
            position: absolute;
            bottom: -11px;
            left: 10px;
            z-index: 1;
            border-radius: 5px;
            border-bottom: 20px solid black;
            border-left: 15px solid transparent;
            border-right: 15px solid transparent;
        }
    `
}