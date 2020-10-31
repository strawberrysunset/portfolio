import React from 'react'
import styled from 'styled-components' 
import {pages} from '../content'
import {colors} from '../theme'
import { Link } from 'react-router-dom'
import { flyInFromRight } from '../utils/css'

const Wrapper = styled.ul`
    background-color: ${colors.blue[100]};
    top:0;
    left:0;
    right:0;
    bottom:0;
    height: 100vh;
    width: 100vw;
    position: absolute;
    z-index: 4;
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    animation: ${flyInFromRight} 0.2s ease-in-out;
    
`

const NavItem = styled.li`
    padding: 0.5rem 0;
    text-align: center;
    color: ${colors.light[300]};
    border-top: 1px solid ${colors.light[100]};
    :last-child{
        border-bottom: 1px solid ${colors.light[100]};
    }
    text-transform: capitalize;
`

export const FlyoutMenu = () => { 

    return (
        <Wrapper>
            {pages.map(page => {
                return <Link to={page.path}><NavItem>{page.name}</NavItem></Link>
            })}
        </Wrapper>
    )
}