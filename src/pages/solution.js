import React from "react";
import styled from "styled-components";
import { Editor } from '../editor/editor'

const Modal = styled.div`
    width: 100%;
    height: 100%;
    padding: 10% 20%;
    background: rgb(158 158 158 / 90%);
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    display: flex;
    flex: 1;
    z-index: 1001;
`

const CloseButton = styled.button`
    position: absolute;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    right: -10px;
    top: -10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    outline: 1px solid white;
    border: 1px solid black;
    cursor: pointer;
    background: white;
`

const Container = styled.div`
    display: flex;
    position: relative;
    flex: 1;
    box-shadow: 0px 0px 20px 9px #000000ba;
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
const EditorHeader = styled.p`
    width: 100%;
    text-align: center;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
    color: ${props => props.color || 'white'};
    background-color: ${props => props.background || 'black'};
`

const PreviewEditor = styled(Editor)`
    min-height: auto;
`

const Solution = (props) => {
    const PreviewComponent = props.component.component
    return <Modal>
        <Container>
            <CloseButton onClick={props.onClick}>X</CloseButton>
            <ContentContainer>
                <SubSection><EditorHeader color='white' background='black'>HTML</EditorHeader><PreviewEditor minHeight='auto' language='xml' displayName='HTML' editable={false} value={`<div></div>`}/></SubSection>
                <SubSection><EditorHeader color='white' background='black'>CSS</EditorHeader><PreviewEditor minHeight='auto' language='css' displayName='CSS' value={`.xyz{some css}`}/></SubSection></ContentContainer>
            <ContentContainer>
                <SubSection><PreviewComponent /></SubSection>
                <SubSection><h1>Notes:</h1></SubSection>
            </ContentContainer>
        </Container>
    </Modal>
}

export { Solution }