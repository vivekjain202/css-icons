import "./styles.css";
import { Main, Footer, UnStyledLink, LargeFont } from "./components/layout/layoutHelper"
import { Header } from "./components/layout/header"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { PlayGround } from "./pages/playground";

export default function App() {
  return (
    <BrowserRouter>
      <Main>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/playground/:iconName?' element={<PlayGround />} />
      </Routes>
      <Footer>Made with ❤️ by <UnStyledLink href='https://github.com/vivekjain202' traget='_blank'>Vivek Jain</UnStyledLink> from <LargeFont>🇮🇳</LargeFont></Footer>
      </Main>
    </BrowserRouter>
  );
}
