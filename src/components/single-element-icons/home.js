import styled from "styled-components";

export const HomeIcon = styled.div`
    width: 40px;
    height: 30px;
    background: black;
    position: relative;

    &:before{
        content: '';
        position: absolute;
        width: 0px;
        height: 0px;
        border-top: 0px;
        border-bottom: 20px solid black;
        border-left: 20px solid white;
        border-right: 20px solid white;
        top: -21px;
    }

    &:after{
        content: '';
        position: absolute;
        width: 15px;
        height: 15px;
        border-radius: 5px 5px 0 0;
        border: 1px solid white;
        left: 12px;
        bottom: -1px;
    }
`;

export const Home = {
    name: 'Home',
    id: 'home',
    component: HomeIcon,
    html: `<div class='home'></div>`,
    css: `
        .home {
            width: 40px;
            height: 30px;
            background: black;
            position: relative;
        }

        .home::before{
            content: '';
            position: absolute;
            width: 0px;
            height: 0px;
            border-top: 0px;
            border-bottom: 20px solid black;
            border-left: 20px solid white;
            border-right: 20px solid white;
            top: -21px;
        }

        .home::after{
            content: '';
            position: absolute;
            width: 15px;
            height: 15px;
            border-radius: 5px 5px 0 0;
            border: 1px solid white;
            left: 12px;
            bottom: -1px;
        }
    `
}