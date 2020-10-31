import { keyframes } from 'styled-components'

export const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const flyInFromRight = keyframes`
    from {
        transform: translateX(100%);
    }

    to {
        transform: translateX(0%);
    }
`;

export const flyUp = keyframes`
    from {
        transform: translateY(+100%);
    }

    to {
        transform: translateY(0%);
    }
`;

export const zoom = keyframes`
    from {
        transform: scale(100%);
    }

    to {
        transform: scale(103%);
    }
`