import styled from "styled-components";

export const BriefCaseIcon = styled.div`
  width: 32px;
  height: 30px;
  border: 1px solid black;
  border-radius: 3px;
  position: relative;
  background: black;

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
    border-left: 1px solid white;
    border-right: 1px solid white;
    top: 0px;
    left: 4px;
  }
`;

export const BriefCase = {
  name: 'Briefcase',
  id: 'briefcase',
  component: BriefCaseIcon,
  html: `<div class='briefcase'></div>`,
  css: `.briefcase{
    width: 32px;
    height: 30px;
    border: 1px solid black;
    border-radius: 3px;
    position: relative;
    background: black;
  }

  .briefcase:before {
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

  .briefcase::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 30px;
    border-left: 1px solid white;
    border-right: 1px solid white;
    top: 0px;
    left: 4px;
  }`
}