import styled from "styled-components";

export const YoutubeIcon = styled.div`
    width: 50px;
    height: 40px;
    border-radius: 10px;
    background: black;
    position: relative;

    &:before{
        content: '';
        position: absolute;
        width: 0px;
        height: 0px;
        border-left: 12px solid white;
        border-top: 9px solid transparent;
        border-bottom: 9px solid transparent;
        border-right: 0px solid transparent;
        top: 11px;
        left: 19px;
    }
`

export const Youtube = {
    name: 'Youtube',
    id: 'youtube',
    component: YoutubeIcon,
    html: `<div class='youtube'></div>`,
    css: `.youtube{
        width: 50px;
        height: 40px;
        border-radius: 10px;
        background: black;
        position: relative;
    }
    .youtube::before{
        content: '';
        position: absolute;
        width: 0px;
        height: 0px;
        border-left: 12px solid white;
        border-top: 9px solid transparent;
        border-bottom: 9px solid transparent;
        border-right: 0px solid transparent;
        top: 11px;
        left: 19px;
    }`
}

// Note :-
// setting one side of border to 0px allows all the other side to take up
// space and converged on that side where we made border 0 px;