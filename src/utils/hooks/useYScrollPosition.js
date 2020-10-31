import React, { useState } from 'react'

export const useYScrollPosition = () => { 
    const [yPos, setYPos] = useState(window.pageYOffset);
    return yPos
}