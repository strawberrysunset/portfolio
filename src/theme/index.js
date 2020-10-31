import { createGlobalStyle } from 'styled-components'
import { reset } from '../utils/css'

const colors = {
    blue : {
        100: "#222326"
    },
    light : {
        100: "#BBBBBB",
        200: "#D2D2D2",
        300: "#f7fafc" //
    },
    orange : {
        100 : "#e09d50"
    }
}

const typeScale = {
    h1 : "3rem", // 48
    h2: "2rem", // 32
    h3: "1.5rem", // 24
    h4: "1.25rem", // 20
    h5: "1.125rem", // 18
    body : "1rem", // 16
    bodySmall : "0.875rem", //14
}

const fonts = {
    default : 'Hind',
    header : 'Montserrat'
}

const GlobalStyling = createGlobalStyle`
    
    ${reset()}; 

    html {
        font-family: 'Hind'; 
        color : ${colors.blue[100]};
    }

    * {
        font-family: inherit; 
        font-size: inherit;
        color: inherit;
        list-style: none;
        box-sizing: border-box;
    }
`

export { colors, typeScale, fonts, GlobalStyling }
