import styled from "styled-components";

export const Dialouge = styled.div`
  width: 70px;
  height: 50px;
  border: 1px solid black;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 20%;
    transform-origin: 0 100%;
    width: 2px;
    height: 20px;
    background-color: black;
    transform: rotate(180deg);
    border-radius: 3px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 20%;
    right: 41%;
    transform-origin: 0 100%;
    width: 2px;
    height: 29px;
    background-color: black;
    transform: rotate(45deg);
    border-radius: 3px;
  }
`;

export const RoundDialouge = styled.div`
  width: 70px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid black;
  position: relative;

  &::before {
    content: "...";
    position: absolute;
    transform: translate(43%, 10%);
    letter-spacing: 5px;
    font-size: 32px;
    font-weight: 1200;
  }

  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: -10px;
    left: 5px;
    border-radius: 50%;
    border-left: 1px solid black;
    border-right: 1px solid black;
  }
`;