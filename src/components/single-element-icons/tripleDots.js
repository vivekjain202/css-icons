import styled from "styled-components";

export const TripleDotsHorizontalIcon = styled.div`
  &::after {
    content: "...";
    font-size: 35px;
    font-weight: 1200;
    letter-spacing: 5px;
  }
`;

export const TripleDotsHorizontal = {
  name: 'Triple Dots Horizontal',
  id: 'triple_dot_horizontal',
  component: TripleDotsHorizontalIcon,
  html: `<div class='tripleDotsHorizontal'></div>`,
  css: `
    .tripleDotsHorizontal::after {
      content: "...";
      font-size: 35px;
      font-weight: 1200;
      letter-spacing: 5px;
    }
  `
}