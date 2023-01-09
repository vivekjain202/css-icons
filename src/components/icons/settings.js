import styled from "styled-components";

export const SettingsSlider = styled.div`
    width: 40px;
    height: 5px;
    border-radius: 5px;
    background: black;
    box-shadow: 0px -15px 0 0 black, 0 15px 0 0 black;
    position: relative;

    &:before{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border: 2px solid black;
        border-radius: 50%;
        background: white;
        top: -4.5px;
        left: 5px;
        box-shadow: 15px -15px 0px -2px white, 15px 15px 0px -2px white,
                    15px -15px 0px black, 15px 15px 0px black;
    }
`

// Note:- 
// Here we use stacking phenomenon of box shadow to create white circle with black border
// looking structure
 
// Box shadow stack in following manner, 1st box shadow will be on top
// and following shadows will be behind the prior one.