import "./styles.css";
import styled, { keyframes } from "styled-components";

const Animation = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-60vh);
  }
`;

const Container = styled.div`
  background: black;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Launcher = styled.div`
  position: absolute;
  bottom: 0px;
  left: 50%;
  right: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
  animation: ${Animation} 2s linear infinite;

  &::after {
    content: " ";
    position: absolute;
    top: 5px;
    height: 30px;
    width: 10px;
    background: red;
    border-radius: 0px 0px 70% 70%;
  }
`;

export default function App() {
  return (
    <Container>
      <Launcher />
    </Container>
  );
}
