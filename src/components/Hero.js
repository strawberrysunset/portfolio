import React from 'react'
import styled from 'styled-components' 
import { colors, fonts, typeScale } from '../theme'
import { fluid } from '../utils/css'
import { PageWrapper } from '../components'
import { flyUp } from '../utils/css'

const img1 = 'https://images.unsplash.com/photo-1514917860136-ee8b88e8c9c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80';
const img2 = 'https://images.unsplash.com/photo-1541974716654-528319ec5a76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
const img3 = 'https://images.unsplash.com/photo-1446038202205-1c96430dbdab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80'
const img4 = 'https://images.unsplash.com/photo-1601164768085-c3a5665db36f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
const img5 = 'https://images.unsplash.com/photo-1557652744-cff42d4a011a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
const img6 = 'https://images.unsplash.com/photo-1527437934671-61474b530017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
const img7 = 'https://images.unsplash.com/photo-1486072889922-9aea1fc0a34d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'

const Wrapper = styled.div`
  background: url(${img7});
  background-size: cover;
  background-position-y: 90%;
  background-repeat: no-repeat;
  color: ${colors.light[300]};
  ${fluid('height', '16rem', '24rem', '20rem', '70rem')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 0;
  position: relative;
  text-shadow: 0 0 4rem rgba(0, 0, 0, 1); 
` 

const Filter = styled.div`
  background: ${colors.blue[100]};
  opacity: 0.6;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`

const Title = styled.h1`
  position: relative;
  font-family: ${fonts.header};
  ${fluid('font-size', typeScale.h2, typeScale.h1, '20rem', '70rem')};
  font-weight: bold;
  z-index: 2;
   
`

const Subtitle = styled.h2`
  position: relative;
  margin-top: 1rem;
  ${fluid('font-size', typeScale.body, typeScale.h3, '20rem', '70rem')};
  z-index: 2;
`

export const Hero = () => { 
    return (
        <Wrapper fullWidth="true">
            <Filter/>
            <PageWrapper>
                    <Title>Hi, my name is Aidan.</Title>
                    <Subtitle>I'm a physics graduate looking for front-end development work.</Subtitle>
            </PageWrapper>
        </Wrapper>
    )
}