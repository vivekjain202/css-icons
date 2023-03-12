import styled from "styled-components";

const CalculatorIcon = styled.div`
    width: 50px;
    height: 70px;
    border-radius: 10px;
    background: black;
    position: relative;

    &::before {
        content:'';
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        top: 22px;
        left: 5px;
        background: white;
        box-shadow: 15px 0 0 white, 30px 0 0 white,0px 15px 0 white,
                    15px 15px 0 white, 30px 15px 0 white,  30px 30px 0 white;
    }

    &::after {
        content: '';
        position: absolute;
        width: 25px;
        height: 10px;
        border-radius: 3px;
        background: white;
        top: 7px;
        left: 5px;
        color: white;
        box-shadow: 15px 0px 0 0 white, 0px 45px 0 0 white;
    }
`

export const Calculator = {
    name: 'Calculator',
    id: 'calculator',
    component: CalculatorIcon,
    html: `<div id='calculator'></div>`,
    css: `
        #calculator {
            width: 50px;
            height: 70px;
            border-radius: 10px;
            background: black;
            position: relative;
        }
        
        #calculator:before{
            content:'';
            position: absolute;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            top: 22px;
            left: 5px;
            background: white;
            box-shadow: 15px 0 0 white, 30px 0 0 white,0px 15px 0 white, 15px 15px 0 white, 30px 15px 0 white,  30px 30px 0 white;
        }
        
        #calculator:after{
            content: '';
            position: absolute;
            width: 25px;
            height: 10px;
            border-radius: 3px;
            background: white;
            top: 7px;
            left: 5px;
            color: white;
            box-shadow: 15px 0px 0 0 white, 0px 45px 0 0 white;
        }
    `
}