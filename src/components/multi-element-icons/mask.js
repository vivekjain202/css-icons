import styled from "styled-components";

const MaskLeft = styled.div`
    width: 35px;
    height: 30px;
    border-radius: 70% 0% 100% 70%;
    background: black;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        background: white;
        border-radius: 50%;
        top: 9px;
        left: 11px;
    }
`

const MaskRight = styled.div`
    width: 35px;
    height: 30px;
    border-radius: 0% 70% 70% 100%;
    background: black;
    margin-left: -8px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        background: white;
        border-radius: 50%;
        top: 9px;
        left: 11px;
    }
`

const MaskContainer = styled.div`
    display: flex;
`

const MaskIcon = () => {
    return <MaskContainer>
        <MaskLeft />
        <MaskRight />
    </MaskContainer>
}

export const Mask = {
    name: 'Mask',
    id: 'mask',
    component: MaskIcon,
    html: `<div id='maskContainer'>
            <div id='maskLeft'></div>
            <div id='maskRight'></div>
          </div>`,
    css: `
    #maskContainer {
        display: flex;
      }
      
      #maskLeft{
        width: 35px;
        height: 30px;
        border-radius: 70% 0% 100% 70%;
        background: black;
        position: relative;
      }
      
      #maskRight{
        width: 35px;
        height: 30px;
        border-radius: 0% 70% 70% 100%;
        background: black;
        margin-left: -8px;
        position: relative;
      }
      
      #maskLeft::after, #maskRight::after{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        background: white;
        border-radius: 50%;
        top: 9px;
        left: 11px;
      }
    `
}