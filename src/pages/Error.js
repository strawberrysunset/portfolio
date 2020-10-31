import React from 'react'
import styled from 'styled-components' 
import { typeScale, fonts, colors } from '../theme'
import { MdError as Icon } from 'react-icons/md'
import Illustration from '../assets/illustrations/errorImage.svg'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 6rem;
` 

const ErrorNumber = styled.h2`
    font-family: ${fonts.header};
    font-size: ${typeScale.h1};
    font-weight: bold;
`

const TitleWrapper = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 0.5rem;
    align-items: center;
    margin-bottom: 2rem;
    margin-right: 1rem;
`

const Message = styled.p`
    font-size: ${typeScale.h4};
`

const Image = styled.img`
    width: 30%;
`

export const Error404 = () => { 
    return (
        <Wrapper>
            <TitleWrapper>
                <Icon size="3rem" color={colors.blue[100]}/>
                <ErrorNumber>404</ErrorNumber>
            </TitleWrapper>
            <Message>Uh oh. You've stumbled upon a nonexistent page!.</Message>
            <Image src={Illustration}/>
        </Wrapper>
    )
}