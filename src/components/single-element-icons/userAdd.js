import styled from "styled-components";

export const UserAddIcon = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid black;
    position: relative;
    background: black;

    &:before {
        content: '+';
        position: absolute;
        top: 4px;
        left: 21px;
        font-weight: bolder;
    }

    &::after {
        content: "";
        width: 30px;
        height: 20px;
        position: absolute;
        border: 1px solid black;
        border-bottom: 0px;
        border-radius: 12px 12px 0px 0px;
        top: 20px;
        left: -6.5px;
        background: black;
    }
`

export const UserAdd ={
    name: 'User Add',
    id: 'user_add',
    component: UserAddIcon,
    html: `<div class='userAdd'></div>`,
    css: ` .userAdd{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid black;
        position: relative;
        background: black;
    }

    .userAdd::before {
        content: '+';
        position: absolute;
        top: 4px;
        left: 21px;
        font-weight: bolder;
    }

    .userAdd::after {
        content: "";
        width: 30px;
        height: 20px;
        position: absolute;
        border: 1px solid black;
        border-bottom: 0px;
        border-radius: 12px 12px 0px 0px;
        top: 20px;
        left: -6.5px;
        background: black;
    }`
}