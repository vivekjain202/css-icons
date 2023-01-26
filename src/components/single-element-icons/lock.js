import styled from "styled-components";

export const LockIcon = styled.div`
  width: 30px;
  height: 25px;
  background: black;
  position: relative;

  &:before{
    content: '';
    position: absolute;
    width: 14px;
    height: 10px;
    border-radius: 30% 30% 0 0;
    border: 3px solid black;
    background: white;
    top: -14px;
    left: 5px;
  }
`

export const Lock = {
  name: 'Lock',
  id: 'lock',
  component: LockIcon,
  html: `<div class='lock'></div>`,
  css: `
    .lock{
      width: 30px;
      height: 25px;
      background: black;
      position: relative;
    }

    .lock::before{
      content: '';
      position: absolute;
      width: 14px;
      height: 10px;
      border-radius: 30% 30% 0 0;
      border: 3px solid black;
      background: white;
      top: -14px;
      left: 5px;
    }
  `
}