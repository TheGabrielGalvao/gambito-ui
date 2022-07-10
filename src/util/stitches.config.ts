import {createStitches} from '@stitches/react'

export const {styled, css, globalCss, createTheme} = createStitches({
    theme: {
        colors: {
            bodyColor: '#E4E9F7',
            sidebarColor: '#FFF',
            primaryColor: '#695CFE',
            primaryColorLight: '#F6F5FF',
            toggleColor: '#DDD',
            textColor: '#707070',
            white: '#fff',
        },
        transitions: {
            tran02: 'all 0.2s ease',
            tran03: 'all 0.3s ease',
            tran04: 'all 0.4s ease',
            tran05: 'all 0.5s ease',
        },

    },
    utils: {
        px: (value: number) => ({
            width: value
        })
    }
    // media: {
    //     sm: '(max-width: 480px)'
    // },
    // theme: {
    //     space: {
    //         1: '10px',
    //         2: '20px',
    //         3: '80px',
    //     }
    // },
    // utils: {
    //     px: (value: number) => ({
    //         padding: value
    //     })
    // }
})

export const light = createTheme({})

export const dark = createTheme({
    colors: {
        bodyColor: '#18191a',
        sidebarColor: '#242526',
        primaryColor: '#3a3b3c',
        primaryColorLight: '#3a3b3c',
        toggleColor: '#fff',
        textColor: '#ccc',
    }
})

