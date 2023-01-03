import styled from "styled-components";

export const AppsIcon = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: black;
  border: 1px solid black;

  box-shadow: 0 -15px 0 0 black, 15px -15px 0 0 black, 15px 0 0 0 black,
    15px 15px 0 0 black, 0 15px 0 0 black, -15px 15px 0 0 black,
    -15px 0 0 0 black, -15px -15px 0 0 black;
`;

export const SunSolid = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: black;
  border: 1px solid black;

  box-shadow: 0 -25px 0 -6px black, 17px -17px 0 -6px black, 25px 0 0 -6px black,
    17px 17px 0 -6px black, 0 25px 0 -6px black, -17px 17px 0 -6px black,
    -25px 0 0 -6px black, -17px -17px 0 -6px black;
`;

export const SunSolidHorizon = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: black;
  border: 1px solid black;
  position: relative;

  box-shadow: 0 -25px 0 -6px black, 17px -17px 0 -6px black, 25px 0 0 -6px black,
    -25px 0 0 -6px black, -17px -17px 0 -6px black;

  &::after {
    content: "";
    width: 55px;
    height: 2px;
    background: black;
    position: absolute;
    bottom: -1px;
    right: -21px;
  }
`;

export const Building = styled.div`
  width: 30px;
  height: 50px;
  background: black;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    width: 0px;
    height: 0px;
    border: 2px solid white;
    box-shadow: 8px 0px 0 0 white, 16px 0px 0 0 white, 0px 7px 0 0 white,
      8px 7px 0 0 white, 16px 7px 0 0 white, 0px 14px 0 0 white,
      8px 14px 0 0 white, 16px 14px 0 0 white;
  }

  &::after {
    content: "";
    width: 15px;
    height: 15px;
    position: absolute;
    bottom: 0px;
    left: 7.5px;
    background: white;
    border-radius: 5px 5px 0 0;
  }
`;

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