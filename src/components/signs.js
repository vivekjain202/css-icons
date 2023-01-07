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

export const PlusSign = styled.div`
  width: 7px;
  height: 40px;
  background: black;
  position: relative;
  border-radius: 2px;
  
  &::before{
    content: '';
    width: 7px;
    height: 40px;
    position: absolute;
    top: 0px;
    background: black;
    transform: rotate(270deg);
    border-radius: 2px;
  }
`

export const MinusSign = styled.div`
  width: 7px;
  height: 40px;
  background: black;
  position: relative;
  border-radius: 2px;
  transform: rotate(270deg);
`

export const MultiplySign = styled.div`
  width: 7px;
  height: 40px;
  background: black;
  position: relative;
  border-radius: 2px;
  transform: rotate(45deg);
  
  &::before{
    content: '';
    width: 7px;
    height: 40px;
    position: absolute;
    top: 0px;
    background: black;
    transform: rotate(270deg);
    border-radius: 2px;
  }
`

export const DivideSign = styled.div`
  width: 7px;
  height: 40px;
  background: black;
  position: relative;
  border-radius: 2px;
  transform: rotate(270deg);
  
  &::before{
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    top: 16px;
    left: 11px;
    border-radius: 50%;
    border: 5px solid black;
  }
  
  &::after{
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    top: 16px;
    left: -13px;
    border-radius: 50%;
    border: 5px solid black;
  }
`;

export const Gmail = styled.div`
  width: 50px;
  height: 50px;
  background: black;
  border-radius: 5px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 8px;
    left: 6px;
    width: 32px;
    height: 32px;
    border-left: 3px solid white;
    border-right: 3px solid white;
  }

  &::after {
    content: "";
    position: absolute;
    top: -2.5px;
    left: 12.5px;
    width: 22px;
    height: 22px;
    border-left: 3px solid white;
    border-bottom: 3px solid white;
    transform: rotate(-45deg);
  }
`;

export const Instagram = styled.div`
  width: 50px;
  height: 50px;
  background: black;
  border-radius: 12px;
  border: 2px solid white;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 12px;
    left: 12px;
    width: 20px;
    height: 20px;
    border: 3px solid white;
    border-radius: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 4px;
    right: 4px;
    width: 0px;
    height: 0px;
    border: 4px solid white;
    border-radius: 50%;
  }
`;


export const Focus = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 2px solid black;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 11.5px;
    left: -6px;
    width: 10px;
    height: 1px;
    background: black;
    border: 1px solid black;
    box-shadow: 27px 0px 0 0 black;
  }

  &::after {
    content: "";
    position: absolute;
    top: -2px;
    left: 7px;
    width: 10px;
    height: 1px;
    background: black;
    border: 1px solid black;
    transform: rotate(90deg);
    box-shadow: 27px 0px 0 0 black;
  }
`;

export const ReactIcon = styled.div`
  width: 15px;
  height: 40px;
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

export const BriefCase = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius: 3px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 12px;
    height: 5px;
    border-radius: 3px 3px 0 0;
    border: 1px solid black;
    border-bottom: 0px;
    left: 8px;
    top: -6px;
  }

  &:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 30px;
    border-left: 1px solid black;
    border-right: 1px solid black;
    top: 0px;
    left: 4px;
  }
`;

export const Globe = styled.div`
    width: 50px;
    height: 50px;
    background: black;
    border-radius: 50%;
    position: relative;

    &:before {
      content:"";
      position: absolute;
      width: 20px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid white;
      top: 0px;
      left: 13px;
    }

    &:after{
      content: '';
      position: absolute;
      width: 50px;
      height: 20px;
      border-top: 2px solid white;
      border-bottom: 2px solid white;
      top: 13px;
    }
`

export const Moon = styled.div`
  width: 50px;
  height: 50px;
  background: black;
  border-radius: 50%;
  position: relative;

  &:after {
    content:"";
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: white;
    left: 18px;
    top: -2px;
  }
`

export const Correct = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background : black;
  position: relative;

  &:before{
    content: '';
    position: absolute;
    height: 13px;
    width: 25px;
    border-left: 4px solid white;
    border-bottom: 4px solid white;
    bottom: 20px;
    left: 10px;
    transform: rotate(-45deg)
  }
`

export const Wrong = styled.div`
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

export const SearchIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid black;
  position: relative;

  &:after{
    content: '';
    position: absolute;
    width: 3px;
    height: 12px;
    background: black;
    bottom: -9px;
    right: -5px;
    transform: rotate(-45deg);
  }
`

export const ZoomInIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid black;
  position: relative;

  &:after{
    content: '';
    position: absolute;
    width: 3px;
    height: 12px;
    background: black;
    bottom: -9px;
    right: -5px;
    transform: rotate(-45deg);
  }

  &:before{
    content: '+';
    font-size: 22px;
    position: absolute;
    top: -4px;
    left: 4px;
    color: black;
    font-weight: bolder;
  }
`

export const ZoomOutIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid black;
  position: relative;

  &:after{
    content: '';
    position: absolute;
    width: 3px;
    height: 12px;
    background: black;
    bottom: -9px;
    right: -5px;
    transform: rotate(-45deg);
  }

  &:before{
    content: '-';
    font-size: 22px;
    position: absolute;
    top: -4px;
    left: 6px;
    color: black;
    font-weight: bolder;
  }
`

export const USB = styled.div`
  width: 25px;
  height: 30px;
  border-radius: 0px 0px 3px 3px;
  border: 1px solid black;
  background: black;
  position: relative;

  &:before{
    content:'';
    position: absolute;
    border: 1px solid black;
    background: black;
    width: 14px;
    height: 10px;
    top: -11px;
    left: 4.5px;
  }

  &:after{
    content: '';
    position: absolute;
    width: 3px;
    height: 4px;
    border-left: 3px solid white;
    border-right: 3px solid white;
    top: -7px;
    left: 7.5px;
  }
`

export const Eye = styled.div`
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

export const Image = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background: black;
  position: relative;

  &:after{
    content: '';
    position: absolute;
    width: 22px;
    height: 32px;
    top: 26px;
    left: 17px;
    border-left: 5px solid white;
    border-top: 5px solid white;
    transform: rotate(42deg);
  }

  &:before{
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: white;
    border-radius: 50%;
    top: 8px;
    left: 7px;
  }
`

export const Lock = styled.div`
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
    top: -14px;
    left: 5px;
  }
`

export const LockOpen = styled.div`
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