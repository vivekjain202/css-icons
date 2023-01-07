import styled from "styled-components";

export const BriefCase = styled.div`
  width: 32px;
  height: 30px;
  border: 1px solid black;
  border-radius: 3px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 12px;
    height: 5px;
    border-radius: 3px 3px 0 0;
    border: 1px solid black;
    border-bottom: 0px;
    left: 8px;
    top: -6px;
  }

  &:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 30px;
    border-left: 1px solid black;
    border-right: 1px solid black;
    top: 0px;
    left: 4px;
  }
`;