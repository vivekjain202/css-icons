import React from "react";
import styled from "styled-components";

const FilterIcon = styled.div`
    width: 50px;
    height: 0px;
    border-radius: 5px 5px 0px 0px;
    border-top: 20px solid black;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    position: relative;

    &::after{
        content:'';
        position: absolute;
        height: 15px;
        background: black;
        width: 10px;
        border-radius: 0 0 2px 2px;
    }
`

export const Filter = {
    name: 'Filter',
    id: 'Filter',
    component: FilterIcon,
    html: `<div class='filter'></div>`,
    css: `
        .filter {
            width: 50px;
            height: 0px;
            border-radius: 5px 5px 0px 0px;
            border-top: 20px solid black;
            border-left: 20px solid transparent;
            border-right: 20px solid transparent;
            position: relative;
        }

        .filter::after{
            content:'';
            position: absolute;
            height: 15px;
            background: black;
            width: 10px;
            border-radius: 0 0 2px 2px;
        }
    `
}