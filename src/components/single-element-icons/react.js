import styled from "styled-components";

export const ReactIcon = styled.div`
  width: 17px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid black;
  transform: rotate(30deg);
  position: relative;
  background: radial-gradient(circle at center, black 10%, white 12%);
  background-origin: content-box;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: 0px;
    width: 15px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid black;
    transform: rotate(120deg);
  }

  &::after {
    content: "";
    position: absolute;
    top: -1px;
    left: 0px;
    width: 15px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid black;
    transform: rotate(60deg);
  }
`;

export const React = {
  name: 'React',
  id: 'react',
  component: ReactIcon,
  html: `<div class='react'></div>`,
  css: `.react{
    width: 17px;
    height: 42px;
    border-radius: 50%;
    border: 1px solid black;
    transform: rotate(30deg);
    position: relative;
    background: radial-gradient(circle at center, black 10%, white 12%);
    background-origin: content-box;
    background-repeat: no-repeat;
  }

  .react::before {
    content: "";
    position: absolute;
    top: -2px;
    left: 0px;
    width: 15px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid black;
    transform: rotate(120deg);
  }

  .react::after {
    content: "";
    position: absolute;
    top: -1px;
    left: 0px;
    width: 15px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid black;
    transform: rotate(60deg);
  }
  `
}