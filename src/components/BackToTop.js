import React from 'react'
import styled from 'styled-components' 
import { MdArrowUpward as Arrow }from 'react-icons/md'
import { colors, typeScale, fonts } from '../theme'
import { Link } from 'react-router-dom'
import { fluid } from '../utils/css'
import { useYScrollPosition } from '../utils/hooks'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${colors.light[300]};
    position: absolute;
    bottom: 2rem;
    right: 4rem;
    padding: 0.75rem;
    box-shadow: 0px 3px 6px ${colors.blue[100]};
    scroll-behavior: smooth;
` 

const Text = styled.div`
    font-size: ${typeScale.bodySmall};
`

const ArrowButton = (
    <Wrapper>
        <Link to="#top"><Arrow color={colors.blue[100]} size="1.5rem"/></Link>
        <Text>Top</Text>
    </Wrapper>
)

export const BackToTop = () => { 

    const yPos = useYScrollPosition();
    const showing = yPos > 0;

    return <>{showing && ArrowButton}</>
    
}