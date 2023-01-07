import styled from "styled-components";

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid black;
`;

// Principle :-
// To create a semi circle we need to first create a circle
// which can be achieved with border-radius
// now to give it a look of semi circle we cover the top part
// with a transparent box

export const SemiCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid black;
  position: relative;
  box-sizing: border-box;

  &::after {
    content: "";
    position: absolute;
    background: white;
    border-bottom: 1px solid black;
    width: 50px;
    height: 50px;
    left: -1px;
    transform: translateY(-50%);
  }
`;
