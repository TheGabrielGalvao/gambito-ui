import { styled } from "../../../util/stitches.config";


export const StyledButton = styled('button', {
    border: 0,
    display: "flex",
    padding: '0.2rem',
    borderRadius: '20%',
    cursor: "pointer",
    transition: '$tran05',

    '&:hover': {
        filter: 'brightness(0.7)',
    },

    '& svg': {
        fontSize: 20
    },


    variants: {
        color:{
            transparent: {},
            default:{
                background: '$primaryColorLight',
                color: '$textColor',
            },
            primary:{},
            success:{},
            warning:{},
            danger:{
                background: '#c23',
                color: '#fff'
            },

        }
    }
})