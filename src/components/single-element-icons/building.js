import styled from "styled-components";

export const Building = styled.div`
  width: 30px;
  height: 50px;
  background: black;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    width: 0px;
    height: 0px;
    border: 2px solid white;
    box-shadow: 8px 0px 0 0 white, 16px 0px 0 0 white, 0px 7px 0 0 white,
      8px 7px 0 0 white, 16px 7px 0 0 white, 0px 14px 0 0 white,
      8px 14px 0 0 white, 16px 14px 0 0 white;
  }

  &::after {
    content: "";
    width: 15px;
    height: 15px;
    position: absolute;
    bottom: 0px;
    left: 7.5px;
    background: white;
    border-radius: 5px 5px 0 0;
  }
`;
