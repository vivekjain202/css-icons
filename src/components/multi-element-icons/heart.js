import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    margin-left: 15px;
`

const LeftPart = styled.div`
    width: 30px;
    height: 50px;
    background: black;
    border-radius: 50%;
    transform: rotate(-30deg);
`

const RightPart = styled.div`
    width: 30px;
    height: 50px;
    background: black;
    border-radius: 50%;
    transform: translateX(-15px) rotate(30deg);
`

const HeartIcon = () => {
    return (
        <Container>
            <LeftPart />
            <RightPart />
        </Container>
    )
}

export const Heart = {
    name: 'Heart',
    id: 'heart',
    component: HeartIcon,
    html: `
        <div id='container'>
            <div class='heart left'></div>
            <div class='heart right'></div>
        </div>
    `,
    css: `
        .heart{
            width: 30px;
            height: 50px;
            background: black;
            border-radius: 50%;
        }
        
        .left {
            transform: rotate(-30deg);
        }
        .right {
            transform: translateX(-15px) rotate(30deg);
        }
    `
}