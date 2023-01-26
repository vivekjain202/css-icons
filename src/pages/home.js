import React, {useState} from "react";
import { Container, IconContainer, AnimationDiv, ButtonHolder, StyledButton, StyledLink, NameHolder} from "../components/layout/layoutHelper"
import { ComponentObject } from "../components";

export const Home = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null)
    return (
        <Container>
          {ComponentObject.map((Component, i) => {
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
                  <StyledButton borderDirection={'right'}><StyledLink to={`/solution/${Component.id}`}>Solution</StyledLink></StyledButton>
                  </ButtonHolder>}
              </IconContainer>
            );
          })}
        </Container>
    )
}