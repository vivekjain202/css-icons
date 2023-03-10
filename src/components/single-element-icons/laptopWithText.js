import styled from "styled-components";

export const LaptopWithTextIcon = styled.div`
  width: 50px;
  height: 35px;
  border-top: 4px double black;
  border-left: 4px double black;
  border-right: 4px double black;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 32px;
    height: 10px;
    border-radius: 1px;
    border-top: 4px double black;
    border-bottom: 4px double black;
    top: 7px;
    left: 5px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 62px;
    height: 10px;
    border: 2px solid black;
    border-radius: 0px 0px 5px 5px;
    bottom: -12px;
    left: -12px;
  }
`;

export const LaptopWithText = {
    name: 'Laptop With Text',
    id: 'laptop_with_text',
    component: LaptopWithTextIcon,
    html: `<div class='laptopWithText'></div>`,
    css: `
        .laptopWithText{
            width: 50px;
            height: 35px;
            border-top: 4px double black;
            border-left: 4px double black;
            border-right: 4px double black;
            position: relative;
        }

        .laptopWithText::before {
            content: "";
            position: absolute;
            width: 32px;
            height: 10px;
            border-radius: 1px;
            border-top: 4px double black;
            border-bottom: 4px double black;
            top: 7px;
            left: 5px;
        }

        .laptopWithText::after {
            content: "";
            position: absolute;
            width: 62px;
            height: 10px;
            border: 2px solid black;
            border-radius: 0px 0px 5px 5px;
            bottom: -12px;
            left: -12px;
          }
    `
}