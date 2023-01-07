import React from "react";
import { Container, IconContainer, AnimationDiv } from "../components/layout/layoutHelper"
import { Components } from "../components";

export const Home = () => {
    return (
        <Container>
          {Components.map((Component, i) => {
            return (
              <IconContainer key={i}>
                <AnimationDiv>
                  <Component />
                </AnimationDiv>
              </IconContainer>
            );
          })}
        </Container>
    )
}