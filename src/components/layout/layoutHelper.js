import styled, { keyframes } from "styled-components"
import { Link } from "react-router-dom"

const Animate = keyframes`
  0%{
    transform: scale(1.2) translateX(5px) rotate(20deg);
  }
  25%{
    transform: scale(1.2) translateX(-5px) rotate(-20deg);
  }
  50%{
    transform: scale(1.2) translateX(5px) rotate(20deg);
  }
  75%{
    transform: scale(1.2) translateX(-5px) rotate(-20deg);
  }
  100%{
    transform: scale(1.2) translateX(5px) rotate(20deg);
  }
`
export const Main = styled.div`
  background: #acb3bf;
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
`

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #e66465, #9198e5);
  width: 100vw;
  height: 50px;
  color: white;
`
export const Container = styled.div`
    display: grid;
    min-height: calc(100vh - 120px);
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    margin: 10px 20px;
`;

export const AnimationDiv = styled.div``

export const IconContainer = styled.div`
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 10px;
    background: white;
    position: relative;

    &:hover{
      border-image: linear-gradient(to right, #e66465, #9198e5) 30;
      border-width: 2px;
      border-style: solid;
      border-radius: 0px;
      ${AnimationDiv}{
          animation: ${Animate} 0.5s ease-in-out;
      }
    }
`;

export const Footer = styled.div`
  width: 100%;
  height: 50px;
  background: linear-gradient(to right, #e66465, #9198e5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const UnStyledLink = styled.a`
  margin: 0 7px;
`

export const LargeFont = styled.span`
  display: inline-block;
  font-size: 25px;
  margin: 0 10px;
`

export const ButtonHolder = styled.div`
    display: flex;
    position: absolute;
    bottom: 0px;
    height: 25px;
    width: 100%;
    background: linear-gradient(to right, #e66465, #9198e5);
    gap: 2px;
    border-top: 1px solid black;
`

export const StyledButton = styled.button`
    flex: 1;
    outline: 0px;
    border: 0px;
    background: transparent;
    &:hover {
      border: 1px solid white;
      cursor: pointer;
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    outline: 0px;
`