import styled from 'styled-components'

const TruckBody = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    background: black;
    position: relative;

    &::before{
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        background: white;
        border-radius: 50%;
        top: 32px;
        left: 10px;
        box-shadow: 22px 0 0 0 white;
    }

    &::after{
        content: '';
        position: absolute;
        width: 10px;
        height: 8px;
        background: black;
        border-radius: 0 0 5px 5px;
        top: 50px;
        left: 8px;
        box-shadow: 24px 0 0 0 black;
    }
`

const Window = styled.div`
    position: absolute;
    width: 30px;
    height: 15px;
    background: white;
    top: 9px;
    left: 10px;
    border-radius: 5px 5px 0 0;
`

export const TruckFrontIcon = () => {
    return (
    <TruckBody>
        <Window></Window>
    </TruckBody>
    )
}

export const TruckFront = {
    name: 'Truck Front',
    id: 'truck_front',
    component: TruckFrontIcon,
    html: `<div class='truckBody'><div class='window'></div></div>`,
    css: `
        .truckBody {
            width: 50px;
            height: 50px;
            border-radius: 10px;
            background: black;
            position: relative;
        }

        .truckBody::before{
            content: '';
            position: absolute;
            width: 8px;
            height: 8px;
            background: white;
            border-radius: 50%;
            top: 32px;
            left: 10px;
            box-shadow: 22px 0 0 0 white;
        }

        .truckBody::after{
            content: '';
            position: absolute;
            width: 10px;
            height: 8px;
            background: black;
            border-radius: 0 0 5px 5px;
            top: 50px;
            left: 8px;
            box-shadow: 24px 0 0 0 black;
        }

        .window {
            position: absolute;
            width: 30px;
            height: 15px;
            background: white;
            top: 9px;
            left: 10px;
            border-radius: 5px 5px 0 0;
        }
    `
}