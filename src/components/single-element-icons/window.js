import styled from "styled-components";

export const WindowsIcon = styled.div`
  width: 50px;
  height: 50px;
  background: black;
  position: relative;
  
  &::before {
    content: '';
    width: 50px;
    height: 4px;
    background: white;
    position: absolute;
    top: 23px;
  }
  
  &::after {
    content: '';
    width: 50px;
    height: 4px;
    background: white;
    position: absolute;
    top: 23px;
    transform: rotate(90deg);
  }
`

export const Windows = {
  name: 'Window',
  id: 'window',
  component: WindowsIcon,
  html: `<div class='window'></div>`,
  css:`.window{
    width: 50px;
    height: 50px;
    background: black;
    position: relative;
  }
  
  .window::before {
    content: '';
    width: 50px;
    height: 4px;
    background: white;
    position: absolute;
    top: 23px;
  }
  
  .window::after {
    content: '';
    width: 50px;
    height: 4px;
    background: white;
    position: absolute;
    top: 23px;
    transform: rotate(90deg);
  }`
}