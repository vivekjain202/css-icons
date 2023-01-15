import styled from "styled-components";

export const TripleDotsHorizontal = styled.div`
  &::after {
    content: "...";
    font-size: 35px;
    font-weight: 1200;
    letter-spacing: 5px;
  }
`;

export const TripleDotsVertical = styled(TripleDotsHorizontal)`
  transform: rotate(90deg);
`;