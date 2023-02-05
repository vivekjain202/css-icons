import styled from "styled-components";

const TicketIcon = styled.div`
    width: 50px;
    height: 30px;
    background: black;
    border: 5px solid white;
    border-radius: 5px;
    outline: 10px solid black;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: white;
        top: 3px;
        left: -24px;
        box-shadow: 73px 0 0 0 white;
    }
`

export const Ticket = {
    name: 'Ticket',
    id: 'ticket',
    component: TicketIcon,
    html: `<div class='ticket'></div>`,
    css: `
        .ticket {
            width: 50px;
            height: 30px;
            background: black;
            border: 5px solid white;
            border-radius: 5px;
            outline: 10px solid black;
            position: relative;
        }

        .ticket::after{
            content: '';
            position: absolute;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: white;
            top: 7.5px;
            left: -22px;
            box-shadow: 80px 0 0 0 white;
          }
    `
}