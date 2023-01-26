import styled from "styled-components";

export const MarkerIcon = styled.div`
    width: 40px;
    height: 40px;
    border: 2px solid black;
    background: black;
    border-radius: 0 100% 100% 100%;
    transform: rotate(225deg);
    position: relative;

    &:before{
        content: '';
        position: absolute;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: white;
        top: 11px;
        left: 11px;
    }
`

// Note:- 
// Border radius and transform are two important concepts here
// to build outer shape we need to use these two properties

export const Marker = {
    name: 'Marker',
    id: 'marker',
    component: MarkerIcon,
    html: `<div class='marker'></div>`,
    css: `
        .marker {
            width: 40px;
            height: 40px;
            border: 2px solid black;
            background: black;
            border-radius: 0 100% 100% 100%;
            transform: rotate(225deg);
            position: relative;
        }

        .marker::before{
            content: '';
            position: absolute;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: white;
            top: 11px;
            left: 11px;
        }
    `
}