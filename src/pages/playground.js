import React, { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import Editor from "../editor/editor";
import { ComponentMap } from "../components";
import { useParams,NavLink, useLocation } from "react-router-dom";
import { Solution } from "./solution";
import Context from '../indexdedDB';

const Container = styled.div`
    display: flex;
    height: calc(100vh - 100px);
    width: 100%;
    padding: 10px;
`

const LeftSection = styled.div`
    width: 20%;
    border-right: 1px dotted black;
    min-height: 100%;
    max-height: 100%;
    overflow-y: scroll;
`

const RightSection = styled.div`
    flex: 1;
    min-height: 100%;
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
  position: relative;
`

export const StyledIframe = styled.iframe`
  width: 100%;
  height: calc(100% - 60px);
`

const StyledLink = styled(NavLink)`
    display: flex;
    width: 100%;
    text-decoration: none;
    cursor: pointer;
    background: ${props => props.active ? 'linear-gradient(to right, #e66465, #9198e5)': ''};
    color: ${props => props.active ? 'white': 'black'};
    padding-left: 10px;
    margin-right: 10px;
    &:hover {
        opacity: 0.85;
    }
`

const LinkText = styled.p`
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const StyledButton = styled.button`
    position: absolute;
    bottom: 0px;
    right: 0px;
    height: 35px;
    padding: 10px;
    background: linear-gradient(to right, #e66465, #9198e5);
    color: white;
    border: 0px;
    cursor: pointer;
    font-size: 16px;
`

// TO DO :- Need to save data to db when we switch tab
// i.e we made changes in playground but then clicked to home tab
// currently in that case it is not storing data
// we need to store data in that case as well
export const PlayGround = () => {
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [src, setSrc] = useState('');
    const [showSolution, setShowSolution] = useState(false)
    const [selectedComponent, setSelectedComponent] = useState(null)
    const { iconName = 'react' } = useParams();
    const location = useLocation()
    const db = useContext(Context);

    // add data to db
    const addToDb = async () => {
        const request = await db.addData({
            id: iconName,
            html: html || '',
            css: css || ''
        })

        request.onsuccess = (data) => {
            console.log('data saved successfully')
        }
    }

    // get data on did mount
    useEffect(() => {
        async function fetchData(){
            let request = await db.getData(iconName)
            
            request.onsuccess = (data) => {
                let result = data.target.result
                setHtml(result?.html || '')
                setCss(result?.css || '')
            }

            request.onerror = (error) => {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    // get data whenever location changes
    useEffect(() => {
        async function fetchData(){
            let request = await db.getData(iconName)
            
            request.onsuccess = (data) => {
                let result = data.target.result
                setHtml(result?.html || '')
                setCss(result?.css || '')
            }

            request.onerror = (error) => {
                console.log(error)
            }
        }
        fetchData()
    }, [location])

    useEffect(() => {
        setSrc(`
            <html>
                <body><div id='center'>${html}</div></body>
                <style>body{padding: 0px; margin: 0px; background: white; border-radius: 2px; border: 1px solid black;} #center{display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;} html, body{width: 100%; height: 100%}</style>
                <style>${css}</style>
            </html>
        `)
    }, [html,css]);

    const ComponentPreview = ComponentMap.get(iconName).component
    return (
        <Container>
            <LeftSection>
                {[...ComponentMap.values()].sort((a,b)=> a.name.localeCompare(b.name)).map((component)=> {
                    return (
                        <StyledLink onClick={addToDb} key={component.id} to={`/playground/${component.id}`} activeClassName='active' active={component.id === iconName}><LinkText title={component.name}>{component.name}</LinkText></StyledLink>
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
                            <EditorHeader>LIVE PREVIEW</EditorHeader>
                            <StyledIframe srcDoc={src} sandbox='allow-scripts'/>
                        </EditorContainer>
                        <EditorContainer>
                            <EditorHeader>REFERENCE</EditorHeader>
                            <PreviewContainer>
                                <ComponentPreview />
                                <StyledButton onClick={() =>{setShowSolution(true);setSelectedComponent(ComponentMap.get(iconName))}}>Reveal Solution</StyledButton>
                            </PreviewContainer>
                        </EditorContainer>
                    </Stack>
                </RightSubSection>
            </RightSection>
            {showSolution && createPortal(<Solution component={selectedComponent} onClick={() => {setShowSolution(false); setSelectedComponent(null)}}/>, document.body)}
        </Container>
    )
}