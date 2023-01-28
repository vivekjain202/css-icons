import styled from "styled-components";

const ApplicationWindowIcon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 5px;
    background: black;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: red;
        top: 5px;
        left: 5px;
        box-shadow: 10px 0 0 0 yellow, 20px 0 0 0 green;
    }
`


export const ApplicationWindow = {
    name: 'Application Window',
    id: 'application_window',
    component: ApplicationWindowIcon,
    html: `<div class='applicationWindow'></div>`,
    css: `
        .applicationWindow{
            width: 40px;
            height: 40px;
            border-radius: 5px;
            background: black;
            position: relative;
        }

        .applicationWindow::before {
            content: '';
            position: absolute;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: white;
            top: 15px;
            left: 10px;
            box-shadow: 10px 0 0 0 yellow, 20px 0 0 0 green;
        }
    `
}