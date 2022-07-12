import { styled } from "../../../../../util/stitches.config";

export const StyledLogo = styled("div", {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    // justifyContent: "center",
    gap: 12,
    
    '& span img': {
        maxWidth: 40,
        borderRadius: 6,
    },
    '& div': {
        display: 'flex',
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: 'flex-start',
        maxHeight: 55
    },
    '.name': {
        marginTop: -10,
        fontSize: 18,
        fontWeight: 600,
    },
    '.profession': {
        fontSize: 15,
        marginTop: -2,
        // display: 'block',
    }
})