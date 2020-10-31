import { useState } from 'react'
import { useWindowSize } from './useWindowSize'

export const useIsMobile = () => { 
    const { width } = useWindowSize();
    return width < 768
}
