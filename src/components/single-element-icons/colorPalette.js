import styled from "styled-components";

const ColorPaletteIcon = styled.div`
    width: 50px;
    height: 50px;
    background: black;
    border-radius: 50%;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: white;
        top: 30px;
        left: 7px;
        box-shadow: 2px -15px 0 0 white, 12px -24px 0 0 white, 25px -22px 0 0 white;
    }

    &:after {
        content: '';
        position: absolute;
        width: 26px;
        height: 26px;
        bottom: -1px;
        right: -1px;
        background: white;
        border-radius: 15px 0 100% 0px ;
    }
`


export const ColorPalette = {
    name: 'Color Palette',
    id: 'color_palette',
    component: ColorPaletteIcon,
    html: `<div id='colorPalette'></div>`,
    css: `
        #colorPalette {
            width: 50px;
            height: 50px;
            background: black;
            border-radius: 50%;
            position: relative;
        }

        #colorPalette:before {
            content: '';
            position: absolute;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: white;
            top: 30px;
            left: 7px;
            box-shadow: 2px -15px 0 0 white, 12px -24px 0 0 white, 25px -22px 0 0 white;
        }

        #colorPalette:after {
            content: '';
            position: absolute;
            width: 26px;
            height: 26px;
            bottom: -1px;
            right: -1px;
            background: white;
            border-radius: 15px 0 100% 0px ;
        }
    `
}