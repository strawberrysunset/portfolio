import React from 'react'
import styled, {css} from 'styled-components' 
import { colors, typeScale } from '../theme'
import { pages } from '../content'
import { Link, useLocation } from 'react-router-dom'

const Wrapper = styled.ul`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 2rem;
`

const NavItem = styled.li`
    color: ${colors.light[100]};
    font-size: ${typeScale.body};
    :first-letter {
        text-transform:capitalize;
    }
    ${props => props.highlight && css`
        color: ${colors.light[300]};
        /* text-decoration: underline;
        text-underline-offset: 1.2rem; */
      `
    };
`



export const DesktopNav = () => { 
  const location = useLocation();

  const NavItems = pages.map(({ name, path }, idx) => {
    return <Link key={idx} to={path}><NavItem highlight={`/${path}` === location.pathname}>{name}</NavItem></Link>
  });

  return (
      <Wrapper>
          {NavItems}
      </Wrapper>
  )
}