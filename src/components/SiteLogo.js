import React from 'react'
import styled from 'styled-components' 
import { MdCode as Logo } from 'react-icons/md'
import { colors, typeScale, fonts } from '../theme'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    color: ${colors.light[300]};
` 

const Name = styled.div`
    margin-left: 0.5rem;
    font-family: ${fonts.header};
    font-size: ${typeScale.h4};
    font-weight: bold;
`

export const SiteLogo = ({ className }) => { 
    return (
        <Link to="/">
          <Wrapper className={className}>
              <Logo size="2rem" color={colors.light[300]}/>
              <Name>aidank.dev</Name>
          </Wrapper>
        </Link>
    )
}