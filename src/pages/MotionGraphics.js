import React from 'react'
import styled from 'styled-components' 
import { Section, PageWrapper } from '../components'
import { FaVideo as Icon} from 'react-icons/fa'
import ReactPlayer from 'react-player'
import { videos } from '../content'
import { colors } from '../theme'

const Gallery = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const Video = styled(ReactPlayer)`
    margin: 0 auto;
    max-width: 600px;
    box-shadow: 0px 3px 6px ${colors.light[100]};
    background-repeat: no-repeat;
    border: 0.5rem solid ${colors.light[300]};
`

export const MotionGraphics = () => { 

    return (
        <PageWrapper>
            <Section title="Motion Graphics" icon={Icon} description="Some of my motion graphics and video editing work."/>
            <Gallery>
                {videos.map((video, idx) => {
                    return <Video key={idx} width="100%" url={video.url}/>
                })}
            </Gallery>
        </PageWrapper>
    )
}