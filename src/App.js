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
  WindowsIcon,
  PlusSign,
  MinusSign,
  MultiplySign,
  DivideSign,
  Gmail,
  Instagram,
  Focus,
  ReactIcon,
  BriefCase,
  Globe,
  Moon,
  Correct,
  Wrong,
  SearchIcon,
  ZoomInIcon,
  ZoomOutIcon,
  USB,
  Eye
} from "./components";

const Main = styled.div`
  background: #acb3bf;
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  // padding-bottom: 10px;
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #e66465, #9198e5);
  width: 100vw;
  height: 50px;
  color: white;
`

const Container = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  margin: 10px 20px;
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

const Footer = styled.div`
  width: 100%;
  height: 50px;
  background: linear-gradient(to right, #e66465, #9198e5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const UnStyledLink = styled.a`
  margin: 0 7px;
`

const LargeFont = styled.span`
  display: inline-block;
  font-size: 25px;
  margin: 0 10px;
`

export default function App() {
  const components = [
    // dark icons
    DiceOne,
    DiceTwo,
    DiceThree,
    DiceFour,
    DiceFive,
    DiceSix,
    AppsIcon,
    SunSolid,
    SunSolidHorizon,
    ArrowToLeft,
    ArrowToRight,
    ArrowToDown,
    ArrowToUp,
    FileIcon,
    Folder,
    Building,
    CreditCard,
    WindowsIcon,
    SolidTriangle,
    PlusSign,
    MinusSign,
    MultiplySign,
    DivideSign,
    Gmail,
    Instagram,
    Globe,
    Moon,
    Correct,
    Wrong,
    SearchIcon,
    ZoomInIcon,
    ZoomOutIcon,
    USB,
    Eye,
    // light icons
    BatteryFull,
    BatteryHalfEmpty,
    BatteryEmpty,
    Circle,
    SemiCircle,
    HorizontalLine,
    VerticalLine,
    Square,
    Reactange,
    CrossSign,
    Star,
    TripleDotsHorizontal,
    TripleDotsVertical,
    MenuIconHorizontal,
    Profile,
    Mobile,
    Laptop,
    LaptopWithText,
    OpenInNewTab,
    NotAllowed,
    Focus,
    ReactIcon,
    BriefCase
  ];

  return (
    <Main>
    <Header>CSS ICONS</Header>
    <Container>
      {components.map((Component, i) => {
        return (
          <IconContainer key={i}>
            <Component />
          </IconContainer>
        );
      })}
    </Container>
    <Footer>Made with ❤️ by <UnStyledLink href='https://github.com/vivekjain202' traget='_blank'>Vivek Jain</UnStyledLink> from <LargeFont>🇮🇳</LargeFont></Footer>
    </Main>
  );
}
