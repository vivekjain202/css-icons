import React from "react";
import styled from "styled-components";
import { Editor } from '../editor/editor'
import js_beautify from "js-beautify";

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
    flex: ${props => props.flex || 1};
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    overflow: scroll;
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
    overflow: scroll;
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

const EditorContainer = styled.div`
    flex: 1;
    border: 1px solid black;
    overflow: scroll;
    width: 100%;
    height: 50%;
`

// const NotesDiv = styled.div`
//     padding-top: 10px;
//     flex: 1;
// `

// const StyledHeading = styled.h3`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: 0px;
//     padding: 0px;
//     height: 40px;
//     width: 100%;
// `


const Solution = (props) => {
    const PreviewComponent = props.component.component
    const options = { indent_size: 2 }
    console.log(js_beautify(props.component.html, options))
    return <Modal>
        <Container>
            <CloseButton onClick={props.onClick}>X</CloseButton>
            <ContentContainer flex={2}>
                <SubSection>
                    <EditorContainer>
                        <EditorHeader color='white' background='black'>HTML</EditorHeader>
                        <PreviewEditor minHeight='auto' language='xml' displayName='HTML' editable={false} value={js_beautify.html(props.component.html, options)}/>
                    </EditorContainer>
                </SubSection>
                <SubSection>
                    <EditorContainer>
                        <EditorHeader color='white' background='black'>CSS</EditorHeader>
                        <PreviewEditor minHeight='auto' language='css' displayName='CSS' value={js_beautify.css(props.component.css, options)} editable={false}/>
                        </EditorContainer>
                </SubSection>
            </ContentContainer>
            <ContentContainer>
                <SubSection><PreviewComponent /></SubSection>
                {/* <SubSection><StyledHeading>Notes:</StyledHeading><NotesDiv>Some notes</NotesDiv></SubSection> */}
            </ContentContainer>
        </Container>
    </Modal>
}

export { Solution }