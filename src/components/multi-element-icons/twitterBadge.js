import styled from "styled-components";

const CheckMark = styled.div`
    position: absolute;
    width: 30px;
    height: 50px;
    background: black;
    border-radius: 50%;
    transform: rotate(-90deg);
    z-index: 1000;
  
    &:before {
        content: '';
        position: absolute;
        width: 20px;
        height: 9px;
        border-left: 3px solid white;
        border-bottom: 3px solid white;
        border-bottom-left-radius: 3px;
        transform: rotate(45deg);
        left: 7px;
        top: 19px;
    }
`

const Badge = styled.div`
    width: 30px;
    height: 50px;
    background: black;
    border-radius: 50%;
    position: relative;
  
    &:before{
        content: '';
        position: absolute;
        width: 30px;
        height: 50px;
        background: black;
        border-radius: 50%;
        transform: rotate(50deg)
    }
  
    &:after{
        content: '';
        position: absolute;
        width: 30px;
        height: 50px;
        background: black;
        border-radius: 50%;
        transform: rotate(-50deg)
    }
`

export const TwitterBadgeIcon = () => {
    return (<Badge>
            <CheckMark />
        </Badge>
    )
}

export const TwitterBadge = {
    name: 'Twitter Badge',
    id: 'twitter_badge',
    component: TwitterBadgeIcon,
    html: `<div class='badge'><div class='checkmark'></div></div>`,
    css: `
        .badge {
            width: 30px;
            height: 50px;
            background: black;
            border-radius: 50%;
            position: relative;
        }

        .badge::before{
            content: '';
            position: absolute;
            width: 30px;
            height: 50px;
            background: black;
            border-radius: 50%;
            transform: rotate(50deg)
        }

        .badge::after{
            content: '';
            position: absolute;
            width: 30px;
            height: 50px;
            background: black;
            border-radius: 50%;
            transform: rotate(-50deg)
        }

        .checkmark {
            position: absolute;
            width: 30px;
            height: 50px;
            background: black;
            border-radius: 50%;
            transform: rotate(-90deg);
            z-index: 1000;
        }

        .checkmark::before {
            content: '';
            position: absolute;
            width: 20px;
            height: 9px;
            border-left: 3px solid white;
            border-bottom: 3px solid white;
            border-bottom-left-radius: 3px;
            transform: rotate(45deg);
            left: 7px;
            top: 19px;
        }
    `
}