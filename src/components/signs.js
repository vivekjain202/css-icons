import styled from "styled-components";

export const CrossSign = styled.div`
  width: 50px;
  height: 50px;
  position: relative;

  &::before {
    content: " ";
    position: absolute;
    top: 0px;
    height: 100%;
    width: 100%;
    /* transfrom from center of bottom line */
    /* transform-origin : x-axis y-axis */
    transform-origin: 50% 100%;
    border-left: 1px solid black;
    transform: rotateZ(45deg);
  }

  &::after {
    content: " ";
    position: absolute;
    top: 0px;
    height: 100%;
    width: 100%;
    /* transfrom from center of bottom line */
    transform-origin: 50% 100%;
    border-right: 1px solid black;
    transform: rotateZ(-45deg);
  }
`;

export const Star = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  border: 1px solid black;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    width: 50px;
    height: 50px;
    transform-origin: 50% 50%;
    transform: rotate(45deg);
    border: 1px solid black;
  }
`;

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

export const ArrowToLeft = styled.div`
  width: 30px;
  height: 2px;
  background: black;
  border-radius: 2px;
  border: 1px solid black;
  position: relative;

  &::before {
    content: "";
    width: 20px;
    height: 3px;
    position: absolute;
    background: black;
    top: 0px;
    left: 1px;
    border-radius: 2px;
    transform-origin: 0% 0%;
    transform: rotate(45deg);
  }

  &::after {
    content: "";
    width: 20px;
    height: 3px;
    position: absolute;
    background: black;
    top: 0px;
    left: -1px;
    border-radius: 2px;
    transform-origin: 0 0;
    transform: rotate(-45deg);
  }
`;

export const ArrowToRight = styled(ArrowToLeft)`
  transform: rotate(180deg);
`;

export const ArrowToUp = styled(ArrowToLeft)`
  transform: rotate(90deg);
`;

export const ArrowToDown = styled(ArrowToLeft)`
  transform: rotate(270deg);
`;

export const TripleDotsHorizontal = styled.div`
  &::after {
    content: "...";
    font-size: 35px;
    font-weight: 1200;
    letter-spacing: 5px;
  }
`;

export const TripleDotsVertical = styled(TripleDotsHorizontal)`
  transform: rotate(90deg);
`;

export const MenuIconHorizontal = styled.div`
  width: 20px;
  height: 16px;
  border-bottom: 2px solid black;
  border-top: 2px solid black;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 1px;
    background: black;
    top: 7px;
    border-bottom: 1px solid black;
  }
`;

export const FileIcon = styled.div`
  width: 20px;
  height: 30px;
  color: black;
  background: black;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    top: 0px;
    right: 0px;
    border-right: 7px solid white;
    border-bottom: 7px solid white;
    background: white;
  }

  &::after {
    content: "";
    position: absolute;
    height: 10px;
    top: -1px;
    right: 3px;
    border-right: 1px solid black;
    transform: rotate(-45deg);
  }
`;

export const Folder = styled.div`
  width: 40px;
  height: 25px;
  background: black;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 13px;
    height: 4px;
    top: -5px;
    border-radius: 3px 3px 0px 0px;
    border: 2px solid black;
    background: black;
  }
`;

export const Profile = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid black;
  position: relative;

  &::after {
    content: "";
    width: 30px;
    height: 20px;
    position: absolute;
    border: 1px solid black;
    border-bottom: 0px;
    border-radius: 10px 10px 0px 0px;
    top: 20px;
    left: -5.5px;
  }
`;

export const BatteryEmpty = styled.div`
  width: 25px;
  height: 15px;
  border: 1px solid black;
  border-radius: 0px 2px 2px 0px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 4px;
    right: -4px;
    width: 2px;
    height: 4px;
    border-radius: 0px 1px 1px 0px;
    border: 1px solid black;
  }
`;

export const BatteryHalfEmpty = styled.div`
  width: 25px;
  height: 15px;
  border: 1px solid black;
  border-radius: 0px 2px 2px 0px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    background: black;
    top: 0px;
    left: 0px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 4px;
    right: -4px;
    width: 2px;
    height: 4px;
    border-radius: 0px 1px 1px 0px;
    border: 1px solid black;
  }
`;

export const BatteryFull = styled.div`
  width: 25px;
  height: 15px;
  border: 1px solid black;
  border-radius: 0px 2px 2px 0px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 25px;
    height: 15px;
    background: black;
    top: 0px;
    left: 0px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 4px;
    right: -4px;
    width: 2px;
    height: 4px;
    border-radius: 0px 1px 1px 0px;
    border: 1px solid black;
    background: black;
  }
`;

export const Mobile = styled.div`
  width: 20px;
  height: 40px;
  border: 1px solid black;
  border-radius: 2px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 7px;
    height: 2px;
    border-radius: 2px;
    background: black;
    top: 2.5px;
    left: 6.5px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    border: 1px solid black;
    bottom: 2px;
    left: 8px;
  }
`;

export const Laptop = styled.div`
  width: 50px;
  height: 35px;
  border-top: 4px double black;
  border-left: 4px double black;
  border-right: 4px double black;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: black;
    top: 3px;
    left: 24px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 70px;
    height: 10px;
    border: 2px solid black;
    border-radius: 0px 0px 5px 5px;
    bottom: -12px;
    left: -12px;
  }
`;

export const LaptopWithText = styled.div`
  width: 50px;
  height: 35px;
  border-top: 4px double black;
  border-left: 4px double black;
  border-right: 4px double black;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 40px;
    height: 10px;
    border-radius: 1px;
    border-top: 4px double black;
    border-bottom: 4px double black;
    top: 7px;
    left: 5px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 70px;
    height: 10px;
    border: 2px solid black;
    border-radius: 0px 0px 5px 5px;
    bottom: -12px;
    left: -12px;
  }
`;

export const NotAllowed = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 50%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0px;
    right: 10px;
    width: 1px;
    height: 20px;
    background: black;
    transform: rotate(-135deg);
  }
`;

export const CreditCard = styled.div`
  width: 50px;
  height: 40px;
  border-radius: 3px;
  background: black;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 10px;
    width: 50px;
    height: 5px;
    background: white;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 5px;
    right: 5px;
    width: 0px;
    height: 0px;
    border: 4px solid white;
    border-radius: 2px;
  }
`;

export const DiceOne = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  position: relative;
  border-radius: 2px;
  
  &::before {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background: black;
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
  
  &::before {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background: black;
    border-radius: 50%;
    top: 5px;
    left: 5px;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background: black;
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
  
  &::before {
    content: '';
    position: absolute;
    width: 0px;
    height: 0px;
    top: 5px;
    left: 5px;
    background: black;
    border: 2.5px solid black;
    border-radius: 50%;
    box-shadow: 8px 8px 0 0 black, 16px 16px 0 0 black;
  }
`

export const DiceFour = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  position: relative;
  border-radius: 2px;
  
  &::before {
    content: '';
    position: absolute;
    width: 0px;
    height: 0px;
    top: 5px;
    left: 5px;
    background: black;
    border: 2.5px solid black;
    border-radius: 50%;
    box-shadow: 14px 0px 0 0 black, 0px 14px 0 0 black, 14px 14px 0 0 black;
  }
`
export const DiceFive = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  position: relative;
  border-radius: 2px;
  
  &::before {
    content: '';
    position: absolute;
    width: 0px;
    height: 0px;
    top: 5px;
    left: 5px;
    background: black;
    border: 2.5px solid black;
    border-radius: 50%;
    box-shadow: 14px 0px 0 0 black, 7px 7px 0 0 black, 0px 14px 0 0 black, 14px 14px 0 0 black;
  }
`

export const DiceSix = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  position: relative;
  border-radius: 2px;
  
  &::before {
    content: '';
    position: absolute;
    width: 0px;
    height: 0px;
    top: 5px;
    left: 5px;
    background: black;
    border: 2.5px solid black;
    border-radius: 50%;
    box-shadow: 14px 0px 0 0 black, 0px 7px 0 0 black, 14px 7px 0 0 black, 0px 14px 0 0 black, 14px 14px 0 0 black;
  }
`

export const OpenInNewTab = styled.div`
  width: 15px;
  height: 10px;
  border: 1px solid black;
  position: relative;
  border-radius: 2px;
    
  &::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 10px;
    border: 1px solid black;
    top: -7px;
    left: 6px;
    background: white;
    border-radius: 2px;
  }
`
