import styled from "styled-components";

export const TripleDotsVerticalIcon = styled.div`
  transform: rotate(90deg);

  &::after {
    content: "...";
    font-size: 35px;
    font-weight: 1200;
    letter-spacing: 5px;
  }
`;

export const TripleDotsVertical = {
    name: 'Triple Dots Vertical',
    id: 'triple_dot_vertical',
    component: TripleDotsVerticalIcon,
    html: `<div class='tripleDotsVertical'></div>`,
    css: `
        .tripleDotsVertical{
            transform: rotate(90deg);
        }

        .tripleDotsVertical::after {
            content: "...";
            font-size: 35px;
            font-weight: 1200;
            letter-spacing: 5px;
          }
    `
}