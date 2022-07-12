import { styled } from "../../util/stitches.config";

export const Container = styled('div', {
    padding: '1.5rem 2rem',
    borderRadius: '0.25rem',
    color: '$titleColor',

    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        '& svg': {
            fontSize: 25
        }
    },

    strong: {
        display: 'block',
        marginTop: '1rem',
        fontSize: '2rem',
        fontWeight: '500',
        lineHeight: '3rem',
    }
})