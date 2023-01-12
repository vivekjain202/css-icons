import styled from "styled-components";

export const MenuIconHorizontal = styled.div`
  width: 20px;
  height: 16px;
  border-bottom: 2px solid black;
  border-top: 2px solid black;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 1px;
    background: black;
    top: 5px;
    border-bottom: 1px solid black;
  }
`;