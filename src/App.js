import "./styles.css";
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
  Eye,
  Image,
  Lock,
  LockOpen
} from "./components";
import { Main, Header, Container, IconContainer, Footer, UnStyledLink, LargeFont, AnimationDiv } from "./components/layoutHelper"

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
    Image,
    Lock,
    LockOpen,

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
            <AnimationDiv>
              <Component />
            </AnimationDiv>
          </IconContainer>
        );
      })}
    </Container>
    <Footer>Made with ❤️ by <UnStyledLink href='https://github.com/vivekjain202' traget='_blank'>Vivek Jain</UnStyledLink> from <LargeFont>🇮🇳</LargeFont></Footer>
    </Main>
  );
}
