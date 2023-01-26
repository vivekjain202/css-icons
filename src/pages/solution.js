import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { ComponentsMap } from "../components";
import { Editor } from '../editor/editor'

const Container = styled.div`
    display: flex;
    height: calc(100vh - 100px);
    width: 100%;
    padding: 10px;
`
const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
`

const SubSection = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    flex: 1;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    background: white;
`

const Solution = () => {
    const { iconName } = useParams();
    const PreviewComponent = ComponentsMap[iconName]

    return <Container>
        <ContentContainer><SubSection><Editor language='xml' displayName='HTML' editable={false} value={`<div></div>`}/></SubSection></ContentContainer>
        <ContentContainer><SubSection><Editor language='css' displayName='CSS' value={`.xyz{some css}`}/></SubSection></ContentContainer>
        <ContentContainer>
            <SubSection><PreviewComponent /></SubSection>
            <SubSection><h1>Notes:</h1></SubSection>
        </ContentContainer>
    </Container>
}

export { Solution }