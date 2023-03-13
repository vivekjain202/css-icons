import styled from 'styled-components'

const WatermelonSliceIcon = styled.div`
    width: 50px;
    height: 25px;
    background: black;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    position: relative;
    transform: rotate(-30deg);

    &::before {
        content: '';
        position: absolute;
        width: 60px;
        height: 30px;
        border-bottom-left-radius: 60px;
        border-bottom-right-radius: 60px;
        top: 0px;
        left: -6px;
        border: solid black;
        border-top: 0px;
        background: transparent;
    }

    &::after {
        content: '';
        position: absolute;
        width: 5px;
        height: 8px;
        border-radius: 2px;
        background: white;
        top: 2px;
        left: 5px;
        box-shadow: 9px 7px 0 0 white, 17px 0 0 0 white, 
                    25px 7px 0 0 white, 35px 0 0 0 white;
    }
`

export const WatermelonSlice = {
    name: 'Watermelon slice',
    id: 'watermelon_slice',
    component: WatermelonSliceIcon,
    html:``,
    css: ``
}