import React, { useState } from 'react'
import styled from 'styled-components' 
import { colors } from '../theme'
import { MdDehaze as HamburgerIcon, MdClose } from 'react-icons/md'
import { FlyoutMenu } from './FlyoutMenu'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
` 

const CloseIcon = styled(MdClose)`
    z-index: 5;
`
export const MobileNav = () => { 
    
    const [showFlyout, setShowFlyout] = useState(false);
   

    const iconStyles = { size: "1.75rem", color: colors.light[300] };

    return (
        <Wrapper onClick={() => setShowFlyout(!showFlyout)}>
            {showFlyout && <FlyoutMenu/>}
            {showFlyout ? <CloseIcon {...iconStyles}/> : <HamburgerIcon {...iconStyles}/> }   
        </Wrapper>
    );

}