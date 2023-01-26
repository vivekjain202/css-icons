import styled from "styled-components";

export const StarIcon = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  border: 1px solid black;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    width: 50px;
    height: 50px;
    transform-origin: 50% 50%;
    transform: rotate(45deg);
    border: 1px solid black;
  }
`;

export const Star = {
  name: 'Star',
  id: 'star',
  component: StarIcon,
  html: `<div class='star'></div>`,
  css: `
    .star {
      width: 50px;
      height: 50px;
      position: relative;
      border: 1px solid black;
    }

    .star::before {
      content: "";
      position: absolute;
      top: 0px;
      width: 50px;
      height: 50px;
      transform-origin: 50% 50%;
      transform: rotate(45deg);
      border: 1px solid black;
    }
  `
}