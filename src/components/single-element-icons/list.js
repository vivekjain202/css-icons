import styled from "styled-components";

export const ListIcon = styled.div`
    width: 5px;
    height: 5px;
    background: black;
    border-radius: 50%;
    position: relative;
    box-shadow: 0 -10px 0 black, 0 10px 0 black;

    &:after{
        content: '';
        position: absolute;
        width: 20px;
        height: 5px;
        border-radius: 5px;
        background: black;
        left: 8px;
        box-shadow: 0 -10px 0 black, 0 10px 0 black;
    }
`

export const List = {
    name: 'List',
    id: 'list',
    component: ListIcon,
    html: `<div class='list'></div>`,
    css: `
        .list {
            width: 5px;
            height: 5px;
            background: black;
            border-radius: 50%;
            position: relative;
            box-shadow: 0 -10px 0 black, 0 10px 0 black;
        }

        .list::after{
            content: '';
            position: absolute;
            width: 20px;
            height: 5px;
            border-radius: 5px;
            background: black;
            left: 8px;
            box-shadow: 0 -10px 0 black, 0 10px 0 black;
        }
    `
}