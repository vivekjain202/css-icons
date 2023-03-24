import styled from "styled-components";

const BoomboxContainer = styled.div`
    width: 50px;
    height: 30px;
    background: black;
    border-radius: 5px;
    position: relative;

    &::before{
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        border-radius: 2px;
        top: -4px;
        left: 12px;
        background: black;
        box-shadow: 10px 0 0 0 black, 20px 0 0 black;
    }

    &::after{
        content: '';
        position: absolute;
        width: 36px;
        height: 12px;
        top: -12px;
        left: 4px;
        border-radius: 5px;
        border: 3px solid black;
    }
`

const BoomLeft = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    outline: 2px solid white;
    position: absolute;
    top: 10px;
    left: 10px;
`

const BoomRight = styled(BoomLeft)`
    margin-left: 20px;
`

const BoomboxIcon = () => {
    return (
        <BoomboxContainer>
            <BoomLeft />
            <BoomRight />
        </BoomboxContainer>
    )
}

export const Boombox = {
    name: 'Boombox',
    id: 'boombox',
    component: BoomboxIcon,
    html: `
        <div class='boombox'>
            <div class='boom'></div>
            <div class='boom right'></div>
        </div>
    `,
    css: `
        .boombox {
            width: 50px;
            height: 30px;
            background: black;
            border-radius: 5px;
            position: relative;
        }
      
      .boombox::before{
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        border-radius: 2px;
        top: -4px;
        left: 12px;
        background: black;
        box-shadow: 10px 0 0 0 black, 20px 0 0 black;
      }
      
      .boombox::after{
        content: '';
        position: absolute;
        width: 36px;
        height: 12px;
        top: -12px;
        left: 4px;
        border-radius: 5px;
        border: 3px solid black;
      }
      
      .boom {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        outline: 2px solid white;
        position: absolute;
        top: 10px;
        left: 10px;
      }
      
      .right {
        margin-left: 20px;
      }
    `
}