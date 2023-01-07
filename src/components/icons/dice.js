import styled from "styled-components";

export const DiceOne = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid grey;
  position: relative;
  border-radius: 2px;
  background: black;
  
  &::before {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background: white;
    border-radius: 50%;
    top: 12px;
    left: 12px;
  }
`

export const DiceTwo = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  position: relative;
  border-radius: 2px;
  background: black;
  
  &::before {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background: white;
    border-radius: 50%;
    top: 5px;
    left: 5px;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background: white;
    border-radius: 50%;
    top: 20px;
    left: 20px;
  }
`


export const DiceThree = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  position: relative;
  border-radius: 2px;
  background: black;
  
  &::before {
    content: '';
    position: absolute;
    width: 0px;
    height: 0px;
    top: 5px;
    left: 5px;
    background: white;
    border: 2.5px solid white;
    border-radius: 50%;
    box-shadow: 8px 8px 0 0 white, 16px 16px 0 0 white;
  }
`

export const DiceFour = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  position: relative;
  border-radius: 2px;
  background: black;
  
  &::before {
    content: '';
    position: absolute;
    width: 0px;
    height: 0px;
    top: 5px;
    left: 5px;
    background: white;
    border: 2.5px solid white;
    border-radius: 50%;
    box-shadow: 14px 0px 0 0 white, 0px 14px 0 0 white, 14px 14px 0 0 white;
  }
`
export const DiceFive = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  position: relative;
  border-radius: 2px;
  background: black;
  
  &::before {
    content: '';
    position: absolute;
    width: 0px;
    height: 0px;
    top: 5px;
    left: 5px;
    background: white;
    border: 2.5px solid white;
    border-radius: 50%;
    box-shadow: 14px 0px 0 0 white, 7px 7px 0 0 white, 0px 14px 0 0 white, 14px 14px 0 0 white;
  }
`

export const DiceSix = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  position: relative;
  border-radius: 2px;
  background: black;
  
  &::before {
    content: '';
    position: absolute;
    width: 0px;
    height: 0px;
    top: 5px;
    left: 5px;
    background: white;
    border: 2.5px solid white;
    border-radius: 50%;
    box-shadow: 14px 0px 0 0 white, 0px 7px 0 0 white, 14px 7px 0 0 white, 0px 14px 0 0 white, 14px 14px 0 0 white;
  }
`