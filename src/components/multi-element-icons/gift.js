import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WrapContainer = styled.div`
  display: flex;
`;

const Wrap = styled.div`
  width: 10px;
  height: 15px;
  border: 2px solid black;
  border-radius: 50%;
  background: white;
  top: -22px;
  left: 6px;
  transform: rotate(-30deg);
`;

const WrapRotated = styled(Wrap)`
  transform: rotate(30deg);
`;

const Bar = styled.div`
  width: 44px;
  height: 8px;
  background: black;
  border-radius: 3px;
  margin-top: -3px;
`;

const GiftBlock = styled.div`
  width: 40px;
  height: 25px;
  background: black;
  border-radius: 0px 0px 5px 5px;
  margin-top: 3px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 4px;
    height: 25px;
    background: white;
    left: 18px;
  }
`;

const GiftIcon = () => {
  return (
    <Container>
      <WrapContainer>
        <Wrap></Wrap>
        <WrapRotated></WrapRotated>
      </WrapContainer>
      <Bar />
      <GiftBlock />
    </Container>
  );
};

export const Gift = {
  name: "Gift",
  id: "gift",
  component: GiftIcon,
  html: `<div class='container'>
    <div class='wrapContainer'>
      <div class='wrap'></div>
      <div class='wrap rotate'></div>
    </div>
    <div class='bar'></div>
    <div class='gift'></div>
  </div>`,
  css: `
    .container {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      .wrapContainer {
        display: flex;
      }
      
      .wrap {
        width: 8px;
        height: 15px;
        border: 2px solid black;
        border-radius: 50%;
        background: white;
        top: -22px;
        left: 6px;
        transform: rotate(-30deg);
      }
      
      .rotate{
         transform: rotate(30deg);
      }
      
      .bar {
        width: 44px;
        height: 8px;
        background: black;
        border-radius: 3px;
        margin-top: -5px;
      }
      
      .gift {
        width: 40px;
        height: 25px;
        background: black;
        border-radius: 5px;
        margin-top: 2px;
        position: relative
      }
      
      .gift::after{
        content: '';
        position: absolute;
        width: 4px;
        height: 25px;
        background: white;
        left: 18px;
      }
    `,
};
