import React from 'react'
import styled, {css} from 'styled-components' 
import { colors } from '../theme'
import { Section, PageWrapper, Lightbox } from '../components'
import { MdCameraAlt as Icon } from 'react-icons/md'
import { zoom } from '../utils/css'

const Gallery = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    /* grid-auto-rows: auto; */
    flex-direction: column;
    gap: 1rem;
    padding: 1rem; 
`

const Photo = styled.img`
    max-width: 48rem;
    margin: 0 auto;
    /* :hover {
      cursor: pointer;
      opacity: 0.7;
    } */
    box-shadow: 0px 3px 6px ${colors.light[100]};
`

const photos = importAll(require.context("../assets/photos", false)); 

function importAll(r) {
    return r.keys().map(r);
}

export const Photography = () => { 

  return (
        <>  
          <PageWrapper>
            {/* {showing && <Lightbox handleClose={() => setShowing(false)} image={url}/>} */}
              <Section title="Photography" icon={Icon} description="Some of my photography work."/>
              <Gallery>
                  {photos.map((url, idx) => {
                    return  <Photo background={url} key={idx} src={url}/>
                  })}
              </Gallery>
          </PageWrapper>
        </>
    )
}