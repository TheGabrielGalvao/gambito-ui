import { styled } from "../../../util/stitches.config";


export const Container = styled("div", {
    background: '$sidebarColor',
    padding: '0.5rem',
    borderRadius: '1rem',
    color: 'text',
    height: '100%',
    width: '100%',
    flex: 1,

    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        fontWeight: 'bold'
    },

    variants: {
        background: {
            transparent: {},
            default:{
                background: '$sidebarColor',
                color: '$textColor',
            },
            primary:{},
            success:{
                background: '$successColor',
                color: '$white',
            },
            warning:{},
            danger:{
                background: '#c23',
                color: '#fff'
            },
        }
    }
})
    
