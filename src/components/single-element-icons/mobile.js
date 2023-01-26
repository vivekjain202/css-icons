import styled from "styled-components";

export const MobileIcon = styled.div`
  width: 20px;
  height: 40px;
  border: 1px solid black;
  border-radius: 2px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 7px;
    height: 2px;
    border-radius: 2px;
    background: black;
    top: 2.5px;
    left: 5px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    border: 1px solid black;
    bottom: 2px;
    left: 7px;
  }
`;

export const Mobile = {
  name:'Mobile',
  id: 'mobile',
  component: MobileIcon,
  html: `<div class='mobile'></div>`,
  css: `
    .mobile {
      width: 20px;
      height: 40px;
      border: 1px solid black;
      border-radius: 2px;
      position: relative;
    }

    .mobile::before {
      content: "";
      position: absolute;
      width: 7px;
      height: 2px;
      border-radius: 2px;
      background: black;
      top: 2.5px;
      left: 5px;
    }

    .mobile::after {
      content: "";
      position: absolute;
      width: 3px;
      height: 3px;
      border-radius: 50%;
      border: 1px solid black;
      bottom: 2px;
      left: 7px;
    }
  `
}