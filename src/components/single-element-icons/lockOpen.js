import styled from "styled-components";

export const LockOpenIcon = styled.div`
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
    top: -13px;
    left: 5px;
  }

  &:after{
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    top: -5px;
    right: 5px;
    background: white;
  }
`

export const LockOpen = {
    name: 'Lock Open',
    id: 'lock_open',
    component: LockOpenIcon,
    html: `<div class='lockOpen'></div>`,
    css: `
        .lockOpen{
            width: 30px;
            height: 25px;
            background: black;
            position: relative;
        }

        .lockOpen::before{
            content: '';
            position: absolute;
            width: 14px;
            height: 10px;
            border-radius: 30% 30% 0 0;
            border: 3px solid black;
            background: white;
            top: -13px;
            left: 5px;
        }

        .lockOpen::after{
            content: '';
            position: absolute;
            width: 5px;
            height: 5px;
            top: -5px;
            right: 5px;
            background: white;
          }
    `
}