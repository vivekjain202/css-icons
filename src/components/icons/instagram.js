import styled from "styled-components";

export const Instagram = styled.div`
  width: 50px;
  height: 50px;
  background: black;
  border-radius: 12px;
  border: 2px solid white;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 11px;
    left: 11px;
    width: 18px;
    height: 18px;
    border: 3px solid white;
    border-radius: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 4px;
    right: 4px;
    width: 0px;
    height: 0px;
    border: 4px solid white;
    border-radius: 50%;
  }
`;
