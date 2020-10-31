import React, { useState } from 'react'
import styled from 'styled-components' 
import { colors } from '../theme'
import { MdClose as Close } from 'react-icons/md'
import {transparentize} from 'polished'

 
const DimBackground = styled.div`
    background: ${transparentize(0.2, colors.blue[100])};
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    padding: 2rem;
    max-width: 20rem;
    max-height: 30rem;
    margin: auto;
    background-color: ${colors.light[300]};
` 

const CloseButton = styled(Close)`
    position: absolute;
    z-index: 20;
    right: 0;
    top: 0;
    height: 2rem;
    width: 2rem;
    :hover {
      cursor: pointer;
    }
`

const Photo = styled.img`
  width: 100%;
  height: auto;
  
`

export const Lightbox = ({ handleClose, image }) => { 
    return (
      <>
    
          <DimBackground>
          <Wrapper>
            <CloseButton onClick={handleClose}/>
              <Photo src={image}></Photo>
          </Wrapper></DimBackground>
      </>
    )
}