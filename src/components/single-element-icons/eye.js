import styled from "styled-components";

export const EyeIcon = styled.div`
  width: 50px;
  height: 30px;
  border-radius: 50%;
  background: black;
  position: relative;

  &:before{
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 3px solid white;
    background: black;
    top : 8px;
    left: 18px;
  }
`

export const Eye = {
  name: 'Eye',
  id: 'eye',
  component: EyeIcon,
  html: `<div class='eye'></div>`,
  css: `
    .eye {
      width: 50px;
      height: 30px;
      border-radius: 50%;
      background: black;
      position: relative;
    }

    .eye::before{
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: 3px solid white;
      background: black;
      top : 8px;
      left: 18px;
    }
  `
}