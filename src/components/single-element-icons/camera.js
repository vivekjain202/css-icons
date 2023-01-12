import styled from 'styled-components'

export const Camera = styled.div`
    width: 40px;
    height: 40px;
    background: black;
    border-radius: 5px;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        width: 10px;
        height: 0px;
        border-bottom: 6px solid black;
        border-left: 5px solid white;
        border-right: 5px solid white;
        top: -7px;
        left: 10px;
    }

    &:after{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 5px solid white;
        top: 10px;
        left: 10px;
    }
`

// Note :-
// To make a trapezoid shape it is important to have a width assigned to
// element so that borders won't be able to converge and make a triangle
