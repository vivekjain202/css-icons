import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Editor from "../editor/editor";
import { ComponentsMap, List } from "../components";
import { useParams } from "react-router-dom";
import { NavLink } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    height: calc(100vh - 120px);
    margin: 10px 20px;
    width: 100%;
`

const LeftSection = styled.div`
    width: 20%;
    border-right: 1px dotted black;
    min-height: 100%;
    max-height: 100%;
    padding: 10px;
    overflow-y: scroll;
`

const RightSection = styled.div`
    flex: 1;
    min-height: 100%;
    padding: 10px;
    display: flex;
    width: 80%;
`

const RightSubSection = styled.div`
    flex: 1;
    border: 1px solid black;
    width: 50%;
    height: 100%;
`

const Stack = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    overflow: scroll;
`

const EditorHeader = styled.p`
    text-align: center;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
    color: ${props => props.color || 'white'};
    background-color: ${props => props.background || 'black'};
`

const EditorContainer = styled.div`
    flex: 1;
    border: 1px solid black;
    overflow: scroll;
    width: 100%;
    height: 50%;
`
export const PreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% - 60px);
  background: white;
`

export const StyledIframe = styled.iframe`
  width: 100%;
  height: calc(100% - 60px);
`

const StyledLink = styled(NavLink)`
    width: 100%;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        opacity: 0.85;
    }

    // &.${props => props.activeClassName} {
    //     border-left: 1px solid white;
    //     border-right: 1px solid white;
    // }
`

const LinkText = styled.p`
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const PlayGround = () => {
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [src, setSrc] = useState('');
    const { iconName = 'react' } = useParams();

    useEffect(() => {
        setSrc(`
            <html>
                <body><div id='center'>${html}</div></body>
                <style>body{padding: 0px; margin: 0px; background: white; border-radius: 2px; border: 1px solid black;} #center{display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;} html, body{width: 100%; height: 100%}</style>
                <style>${css}</style>
            </html>
        `)
    }, [html,css]);

    const ComponentPreview = ComponentsMap[iconName]
    return (
        <Container>
            <LeftSection>
                {Object.entries(List).map(([key, name])=> {
                    return (
                        <StyledLink key={key} to={`/css-icons/playground/${key}`} activeClassName='active'><LinkText title={name}>{name}</LinkText></StyledLink>
                    )
                })}
            </LeftSection>
            <RightSection>
                <RightSubSection>
                    <Stack>
                        <EditorContainer>
                            <EditorHeader color='white' background='black'>HTML</EditorHeader>
                            <Editor 
                                placeholder='Enter your HTML here'
                                language='xml'
                                displayName='HTML'
                                value={html}
                                onChange={(html) => setHtml(html)}
                            />
                        </EditorContainer>
                        <EditorContainer>
                            <EditorHeader color='white' background='black'>CSS</EditorHeader>
                            <Editor 
                                placeholder='Enter your CSS here'
                                language='css'
                                displayName='CSS'
                                value={css}
                                onChange={(css) => setCss(css)}
                            />
                        </EditorContainer>
                    </Stack>
                </RightSubSection>
                <RightSubSection>
                    <Stack>
                        <EditorContainer>
                            <EditorHeader>RESULT</EditorHeader>
                            <StyledIframe srcDoc={src} sandbox='allow-scripts'/>
                        </EditorContainer>
                        <EditorContainer>
                            <EditorHeader>REFERENCE</EditorHeader>
                            <PreviewContainer>
                                <ComponentPreview />
                            </PreviewContainer>
                        </EditorContainer>
                    </Stack>
                </RightSubSection>
            </RightSection>
        </Container>
    )
}