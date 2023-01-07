import React from "react";
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(to right, #e66465, #9198e5);
    width: 100vw;
    height: 50px;
    color: white;
`

const HeaderLeftBlock = styled.div`
    display: flex;
    margin-left: 30px;
`

const HeaderRightBlock = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    margin-right: 30px;
`

const StyledLink = styled(NavLink)`
    margin: 5px 10px;
    text-decoration: none;
    color: white;
    cursor: pointer;

    &:hover {
        opacity: 0.85;
    }

    &.${props => props.activeClassName} {
        border-bottom: 1px solid white;
    }
`
const ActiveStyle = ({'borderBottom': '1px solid white'})

export const Header = () => {
    const location = useLocation()
    return (
        <HeaderContainer>
            <HeaderLeftBlock><StyledLink to={'/'}>CSS ICONS</StyledLink></HeaderLeftBlock>
            <HeaderRightBlock>
                <StyledLink to={'/'} activeClassName='active'>HOME</StyledLink>
                <StyledLink to={'/playground'} activeClassName='active'>PLAYGROUND</StyledLink>
            </HeaderRightBlock>
        </HeaderContainer>
    )
}