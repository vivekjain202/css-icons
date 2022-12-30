import "./styles.css";
import styled from "styled-components";
import {
  Circle,
  SemiCircle,
  HorizontalLine,
  VerticalLine,
  SolidTriangle,
  Square,
  Reactange,
  CrossSign,
  Star,
  AppsIcon,
  SunSolid,
  SunSolidHorizon,
  ArrowToLeft,
  ArrowToRight,
  ArrowToDown,
  ArrowToUp,
  TripleDotsHorizontal,
  TripleDotsVertical,
  MenuIconHorizontal,
  FileIcon,
  Folder,
  Profile,
  BatteryEmpty,
  BatteryHalfEmpty,
  BatteryFull,
  Mobile,
  Laptop,
  LaptopWithText,
  Building,
  NotAllowed,
  CreditCard,
  DiceOne,
  DiceTwo,
  DiceThree,
  DiceFour,
  DiceFive,
  DiceSix,
  OpenInNewTab,
  WindowsIcon
} from "./components";

const Container = styled.div`
  position: relative;
  display: flex;
  column-gap: 20px;
  row-gap: 20px;
  width: 100vw;
  padding: 10px;
  margin: 5px;
  box-sizing: border-box;
  overflow: hidden;
  flex-wrap: wrap;
  background-color: #acb3bf;
`;

const IconContainer = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  background: white;
`;

export default function App() {
  const components = [
    Circle,
    SemiCircle,
    HorizontalLine,
    VerticalLine,
    SolidTriangle,
    Square,
    Reactange,
    CrossSign,
    Star,
    AppsIcon,
    SunSolid,
    SunSolidHorizon,
    ArrowToLeft,
    ArrowToRight,
    ArrowToDown,
    ArrowToUp,
    TripleDotsHorizontal,
    TripleDotsVertical,
    MenuIconHorizontal,
    FileIcon,
    Folder,
    Profile,
    BatteryEmpty,
    BatteryHalfEmpty,
    BatteryFull,
    Mobile,
    Laptop,
    LaptopWithText,
    Building,
    NotAllowed,
    CreditCard,
    DiceOne,
    DiceTwo,
    DiceThree,
    DiceFour,
    DiceFive,
    DiceSix,
    OpenInNewTab,
    WindowsIcon
  ];

  return (
    <Container>
      {components.map((Component, i) => {
        return (
          <IconContainer key={i}>
            <Component />
          </IconContainer>
        );
      })}
    </Container>
  );
}
