import styled from "styled-components";

export const UserAddIcon = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid black;
    position: relative;

    &:before {
        content: '+';
        position: absolute;
        top: 2px;
        left: 19px;
    }

    &:after {
        content: '';
        position: absolute;
        width: 25px;
        height: 15px;
        border: 1px solid black;
        border-bottom: 0px;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        top: 15px;
        left: -5.5px;
    }
`

export const UserAdd ={
    name: 'User Add',
    id: 'user_add',
    component: UserAddIcon,
    html: `<div class='userAdd'></div>`,
    css: ` .userAdd{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: 1px solid black;
        position: relative;
    }

    .userAdd::before {
        content: '+';
        position: absolute;
        top: 2px;
        left: 19px;
    }

    .userAdd::after {
        content: '';
        position: absolute;
        width: 25px;
        height: 15px;
        border: 1px solid black;
        border-bottom: 0px;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        top: 15px;
        left: -5.5px;
    }`
}