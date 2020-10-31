import React, { useState } from 'react'
import styled from 'styled-components' 
import { SiteLogo } from './SiteLogo'
import { colors } from '../theme'
import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'
import { FaRoad } from 'react-icons/fa'
import { useIsMobile } from '../utils/hooks'


const Backgound = styled.header`
    background-color: ${colors.blue[100]};
    box-shadow: 0px 3px 6px ${colors.light[100]};
` 

const Content = styled.div`
    max-width: 70rem;
    margin: 0 auto;
    padding: 0.75rem 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Spacer = styled.div`

`

export const Header = () => { 

    const isMobile = useIsMobile();

    return (
        <Backgound>
            <Content>
                <SiteLogo/>
                {isMobile ? <MobileNav style={{marginRight: "1rem"}}/> : <DesktopNav/>}
            </Content>
        </Backgound>
    )
}