import React from 'react'
import styled from 'styled-components' 

const Wrapper = styled.div`
    max-width: 70rem;
    min-width: 20rem;
    width: 100%;
    padding: 3rem 1rem;
    margin: 0 auto;
    @media (max-width: 48rem) {
      padding: 1.5rem 1rem;
    }
` 

export const PageWrapper = ({ className, children }) => { 

    return (
        <Wrapper className={className}>
            {children}
        </Wrapper>
    )
}