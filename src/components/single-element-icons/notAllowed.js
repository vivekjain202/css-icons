import styled from "styled-components";

export const NotAllowedIcon = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius: 50%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    right: 13px;
    width: 1px;
    height: 30px;
    background: black;
    transform: rotate(-135deg);
  }
`;

export const NotAllowed = {
  name: 'Not Allowed',
  id: 'not_allowed',
  component: NotAllowedIcon,
  html: `<div class='notAllowed'></div>`,
  css: `
    .notAllowed {
      width: 30px;
      height: 30px;
      border: 1px solid black;
      border-radius: 50%;
      position: relative;
    }

    .notAllowed::after {
      content: "";
      position: absolute;
      bottom: -1px;
      right: 13px;
      width: 1px;
      height: 30px;
      background: black;
      transform: rotate(-135deg);
    }
  `
}