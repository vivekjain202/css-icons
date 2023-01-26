import React, {useState} from "react";
import { createPortal } from "react-dom";
import { Container, IconContainer, AnimationDiv, ButtonHolder, StyledButton, StyledLink, NameHolder} from "../components/layout/layoutHelper"
import { ComponentMap } from "../components";
import { Solution } from "./solution";

export const Home = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const [showSolution, setShowSolution] = useState(false)
    const [selectedComponent, setSelectedComponent] = useState(null)
    return (
        <Container>
          {[...ComponentMap.values()].map((Component, i) => {
            return (
              <IconContainer key={i} onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)}>
                {i === hoveredIndex && <NameHolder>
                    <p>{Component.name}</p>
                  </NameHolder>}
                <AnimationDiv>
                  <Component.component />
                </AnimationDiv>
                {i === hoveredIndex && <ButtonHolder>
                  <StyledButton borderDirection={'left'}><StyledLink to={`/playground/${Component.id}`}>Practice</StyledLink></StyledButton>
                  <StyledButton borderDirection={'right'} onClick={() => {setShowSolution(true); setSelectedComponent(Component)}}>Solution</StyledButton>
                  </ButtonHolder>}
              </IconContainer>
            );
          })}
          {showSolution && createPortal(<Solution component={selectedComponent} onClick={() => {setShowSolution(false); setSelectedComponent(null)}}/>, document.body)}
        </Container>
    )
}