import {globalCss, styled} from './stitches.config'

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        fontFamily: 'Poppins, sans-serif',
    },

    body: {
        minHeight: '100vh',
        backgroundColor: '$bodyColor',
        transition: '$tran05',
    },

    '::selection': {
        backgroundColor: '$primaryColor',
        color: '$white',
    }
})