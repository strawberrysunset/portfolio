import React from 'react'
import styled from 'styled-components' 
import { typeScale, colors } from '../theme'
import { flyUp }  from '../utils/css'

const Wrapper = styled.div`
    display: grid;
    grid-template-areas: 
        "icon name"
        "icon description";
    grid-template-columns: 2rem auto;
    grid-template-rows: 1rem auto;
    color: ${colors.light[300]};
    box-shadow: 0px 3px 6px ${colors.light[100]};
    border-radius: 0.25rem;
    background: ${colors.blue[100]};
    padding: 1rem;
    padding-right: 2rem;
    padding-top: 1.25rem;
    grid-gap: 1rem;
    /* border: 2px solid ${colors.light[300]}; */
    border-top: 0.4rem solid ${({ color }) => color || colors.blue[100]};
` 

const Name = styled.h3`
    grid-area: name;
    font-size: ${typeScale.h5};
    font-weight: bold;
    margin-top: -0.2rem;
`

const Description = styled.p`
    grid-area: description;
    margin-top: -0.5rem;
    font-size: ${typeScale.bodySmall};
    letter-spacing: -0.03em;
`

export const SkillCard = ({ name, description, icon : Icon, color }) => { 

    return (
        <Wrapper color={color}>
            <Icon style={{ gridArea:'icon', marginRight: '1rem' }} color={colors.light[300]} size="2.25rem"/>
            <Name>{name}</Name>
            <Description>{description}</Description>
        </Wrapper>
    )
}