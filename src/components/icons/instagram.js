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
    top: 12px;
    left: 12px;
    width: 20px;
    height: 20px;
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
