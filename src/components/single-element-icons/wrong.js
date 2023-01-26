import styled from "styled-components";

export const WrongIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background : black;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    height: 34px;
    width: 5px;
    top: 17%;
    left: 45%;
    background: white;
    transform: rotate(-45deg)
  }

  &:after {
    content: '';
    position: absolute;
    height: 34px;
    width: 5px;
    top: 17%;
    right: 45%;
    background: white;
    transform: rotate(45deg)
  }
`

export const Wrong = {
  name: 'Wrong',
  id: 'wrong',
  component: WrongIcon,
  html: `<div class='wrong'></div>`,
  css: `.wrong{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background : black;
    position: relative;
  }

  .wrong::before {
    content: '';
    position: absolute;
    height: 34px;
    width: 5px;
    top: 17%;
    left: 45%;
    background: white;
    transform: rotate(-45deg)
  }

  .wrong::after {
    content: '';
    position: absolute;
    height: 34px;
    width: 5px;
    top: 17%;
    right: 45%;
    background: white;
    transform: rotate(45deg)
  }`
}