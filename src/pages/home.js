import React, {useState} from "react";
import { Container, IconContainer, AnimationDiv, ButtonHolder, StyledButton, StyledLink} from "../components/layout/layoutHelper"
import { Components } from "../components";
import { Link } from "react-router-dom";

export const Home = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null)
    return (
        <Container>
          {Components.map((Component, i) => {
            return (
              <IconContainer key={i} onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)}>
                <AnimationDiv>
                  <Component />
                </AnimationDiv>
                {i === hoveredIndex && <ButtonHolder>
                  <StyledButton borderDirection={'left'}><StyledLink to={`/palayground`}>Practice</StyledLink></StyledButton>
                  <StyledButton borderDirection={'right'}><StyledLink to={`/solution`}>Solution</StyledLink></StyledButton>
                  </ButtonHolder>}
              </IconContainer>
            );
          })}
        </Container>
    )
}