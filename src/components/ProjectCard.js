import React from 'react'
import styled from 'styled-components' 
import { colors, typeScale } from '../theme'

const Wrapper = styled.div`
    color : ${colors.light[300]};
    box-shadow: 0px 3px 6px ${colors.light[100]};
    padding: 1.5em;
    padding-top: 6rem;
    border-radius: 0.25rem;
    text-shadow: 0px 0 1rem rgba(0, 0, 0, 0.6);

    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), 50%, rgba(0, 0, 0, 1)), 
        url(${({image}) => image});
    background-size: cover;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: left;
    text-align: left;
`

const Title = styled.div`
    font-weight: 900;
    font-size: ${typeScale.h3};
    z-index: 1;
    margin-right: 0.75rem;
`

const Description = styled.div`
    font-size: ${typeScale.body};
    line-height: 1.3;
    z-index: 1;
    margin-top: 0.25rem;
    width: 90%;
`

const LinksWrapper = styled.ul`
    display: flex;
    align-items: center;
    
`

const ProjectLink = styled.a`
    border-radius: 0.2rem;
    padding: 0 0.4rem;
    padding-top: 0.15rem;
    font-size: ${typeScale.bodySmall};
    background-color: ${({color}) => color};
    margin-left: 0.5rem;
    margin-bottom: 0.1rem;
    color: ${colors.light[300]};
    text-decoration: none;
    border: 1px solid ${colors.light[200]};
    
    :hover{
        background-color: ${colors.light[100]};
    }
    :active{
        background-color: ${colors.blue[100]};
        color: ${colors.light[300]};
        border: 1px solid ${colors.light[300]};
    }
`

export const ProjectCard = ({ name, description, thumbnail, codeLink, liveLink }) => { 
    return (
        <Wrapper image={thumbnail}>
            <LinksWrapper>
                <Title>{name}</Title>
                <ProjectLink color={colors.blue[100]} target="_blank" href={liveLink}>Live</ProjectLink>
                <ProjectLink color={colors.blue[100]} target="_blank" href={codeLink}>Code</ProjectLink>
            </LinksWrapper>
            <Description>{description}</Description>
        </Wrapper>
    )
}