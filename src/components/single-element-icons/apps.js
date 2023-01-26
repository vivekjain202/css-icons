import styled from "styled-components";

export const AppsIcon = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: black;
  border: 1px solid black;

  box-shadow: 0 -13px 0 0 black, 13px -13px 0 0 black, 13px 0 0 0 black,
    13px 13px 0 0 black, 0 13px 0 0 black, -13px 13px 0 0 black,
    -13px 0 0 0 black, -13px -13px 0 0 black;
`;

export const Apps = {
  name: 'Apps',
  id: 'apps',
  component: AppsIcon,
  html: `<div class='apps'></div>`,
  css: `.apps {
     width: 6px;
     height: 6px;
     border-radius: 50%;
     background: black;
     border: 1px solid black;
     box-shadow: 0 -13px 0 0 black, 13px -13px 0 0 black, 13px 0 0 0 black,
       13px 13px 0 0 black, 0 13px 0 0 black, -13px 13px 0 0 black,
       -13px 0 0 0 black, -13px -13px 0 0 black;
   }`
}