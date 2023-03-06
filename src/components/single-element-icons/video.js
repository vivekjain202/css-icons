import React from 'react'
import styled from 'styled-components'

const VideoIcon = styled.div`
    width: 30px;
    height: 30px;
    background: black;
    border-radius: 5px;
    position: relative;

    &::after{
        content: '';
        position: absolute;
        height: 10px;
        width: 0px;
        right: -16px;
        top: 2px;
        border-right: 15px solid black;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        border-radius: 5px;
    }
`

export const Video = {
    name: 'Video',
    id: 'video',
    component: VideoIcon,
    html: `<div id='video'></div>`,
    css: `
        #video {
            width: 30px;
            height: 30px;
            background: black;
            border-radius: 5px;
            position: relative;
        }

        #video::after {
            content: '';
            position: absolute;
            height: 10px;
            width: 0px;
            right: -16px;
            top: 2px;
            border-right: 15px solid black;
            border-top: 8px solid transparent;
            border-bottom: 8px solid transparent;
            border-radius: 5px;
        }
    `
}