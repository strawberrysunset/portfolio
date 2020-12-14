import CoinPaletteImage from '../assets/thumbnails/coinpalette.png'
import NoveriaImage from '../assets/thumbnails/noveria.png'
import PortfolioImage from '../assets/thumbnails/aidank.png'
import SpaceXImage from '../assets/thumbnails/spacex.png'

export const projectList = [
    {
        name : "CoinPalette",
        description : "A simple REST API providing cryptocurrency logo colour palettes in RGB, HEX and HSL." ,
        thumbnail: CoinPaletteImage,
        liveLink : "https://www.coinpalette.com",
        codeLink: "https://www.github.com/strawberrysunset/coinpalette"
    },
    {
        name : "Noveria",
        description : "An account-less browser-based cryptocurrency portfolio tracking application." ,
        thumbnail: NoveriaImage,
        liveLink : "https://www.noveria.app",
        codeLink: "https://www.github.com/strawberrysunset/noveria"
    },
    {
        name : "Portfolio",
        description : "A showcase of personal projects I have created. This is the site you are currently viewing." ,
        thumbnail: PortfolioImage,
        liveLink : "/",
        codeLink: "https://www.github.com/strawberrysunset/portfolio"
    },
    {
        name : "SpaceX Viewer",
        description : "A React application for viewing past and future SpaceX launches. " ,
        thumbnail: SpaceXImage,
        liveLink : "https://strawberrysunset.github.io/SpaceXViewer/index.html",
        codeLink: "https://github.com/strawberrysunset/SpaceXViewer"
    },
]