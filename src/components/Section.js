import React from 'react'
import styled from 'styled-components' 
import { typeScale, fonts, colors } from '../theme'
import { fluid } from '../utils/css'


const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 3rem;
    /* border-bottom: 1px solid ${colors.light[100]}; */
`

const Title = styled.h3`
    ${fluid('font-size', typeScale.h3, typeScale.h2, '20rem', '70rem' )};
   
    font-family: ${fonts.header}; 
    font-weight: bold;   
    margin-left: 0.75rem;
`

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-right: 0.75rem;
`

const Description = styled.p`
    font-size: ${typeScale.h5};
    margin-top: 1rem;
    margin-bottom: 2rem;
`

export const Section = ({ icon : Icon, title, description }) => { 
    return (
        <Wrapper>
            <TitleWrapper>
                <Icon size="1.75rem"/>
                <Title>{title}</Title>
            </TitleWrapper> 
            <Description>{description}</Description>
        </Wrapper>
    )
}