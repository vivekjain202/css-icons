import styled from 'styled-components'
import React from 'react'

const Wings = styled.div`
    margin-top: 15px;
    width: 10px;
    height: 30px;
    border-radius: 5px;
    background: black;
    z-index: 1;
`

const WingLeftBody = styled.div`
    margin-left: -10px;
    border-left: 25px solid transparent;
    border-bottom: 25px solid black;
`

const WingRightBody = styled.div`
    margin-right: -10px;
    border-top: 25px solid transparent;
    border-left: 25px solid black;
`

const Body = styled.div`
    margin-top: -15px;
    width: 20px;
    height: 50px;
    background: black;
    border-radius: 50% 50% 0 0;
    position: relative;
    z-index: 1;

    &:before{
        content: '';
        position: absolute;
        bottom: -5px;
        left: -5px;
        border-bottom: 30px solid black; 
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
    }
`

const Container = styled.div`
    display: flex;
    align-items: center;
`

const FighterPlaneIcon = () => {
    return (
        <Container>
            <Wings />
            <WingLeftBody />
            <Body />
            <WingRightBody />
            <Wings />
        </Container>
    )
}

export const FighterPlane = {
    name: 'Fighter Plane',
    id: 'fighter_plane',
    component: FighterPlaneIcon,
    html: `
        <div class='container'>
            <div class='wings'></div>
            <div class='wingsLeftBody'></div>
            <div class='body'></div>
            <div class='wingsRightBody'></div>
            <div class='wings'></div>
        </div>
    `,
    css: `
        .container {
            display: flex;
            align-items: center;
        }

        .wings {
            margin-top: 15px;
            width: 10px;
            height: 30px;
            border-radius: 5px;
            background: black;
            z-index: 1;
        }

        .wingLeftBody {
            margin-left: -10px;
            border-left: 25px solid transparent;
            border-bottom: 25px solid black;
        }

        .wingRightBody {
            margin-right: -10px;
            border-top: 25px solid transparent;
            border-left: 25px solid black;
        }

        .body {
            margin-top: -15px;
            width: 20px;
            height: 50px;
            background: black;
            border-radius: 50% 50% 0 0;
            position: relative;
            z-index: 1;

            &:before{
                content: '';
                position: absolute;
                bottom: -5px;
                left: -5px;
                border-bottom: 30px solid black; 
                border-left: 15px solid transparent;
                border-right: 15px solid transparent;
            }
        }
    `
}