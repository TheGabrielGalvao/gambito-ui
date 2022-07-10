import { styled } from "../../util/stitches.config"

export const StyledMenu = styled("nav", {
    position: 'fixed',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    height: '100%',
    padding: '20px 15px',
    background: "$sidebarColor",
    transition: "$tran05",
    zIndex: 100,

    '.text': {
        color: "$textColor",
        transition: "$tran03",
        fontSize: 17,
        fontWeight: '500',
        whiteSpace: 'nowrap',
        opacity: '1',
    },

    header: {
        position: 'relative',
        // top: 10,
        display: "flex",
        cursor: 'pointer',
        // alignItems: "center",
        // justifyContent: "center",


        '& svg': {
            position: 'absolute',
            top: '50%',
            right: -25,
            transform: 'translateY(-50%) rotate(180deg)',
            height: 25,
            width: 25,
            backgroundColor: '$primaryColor',
            color: '$sidebarColor',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 22,
            cursor: 'pointer',
            transition: '$tran05',
        }
    },

    variants: {
        toggle: {
            open: {
                width: 250,                
            },
            close: {
                width: 88,
                
                '& header svg': {
                    transform: 'translateY(-50%) rotate(0deg)'
                },
                '.text': {
                    opacity: 0
                },
                input: {
                    display: 'none'
                }
            }
        }
    }
})

export const MenuLogo = styled("div", {
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

export const Navigation = styled("div", {
    height: 'calc(100% - 55px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    
    // overflowY: 'scroll',
})

export const Main = styled("div", {
    marginTop: 40
})

export const MenuItem = styled("li", {
    height: 50,
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: "center",
    
    '& svg': {
        minWidth: 30,
        borderRadius: 6,
        height: '100%',
        display: 'flex',
        fontSize: 20,
        color: "$textColor",
        transition: "$tran03"
    },

    input: {
        height: '100%',
        width: '100%',
        outline: 'none',
        border: 'none',
        backgroundColor: "$primaryColorLight",
        color: "$textColor",
        borderRadius: 6,
        fontSize: 17,
        fontWeight: 500,
        transition: "$tran05" 
    },
    
    a: {
        // listStyle: 'none',
        height: '100%',
        
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        borderRadius: 6,
        textDecoration: 'none',
        transition: "$tran03",
        gap: 20,
        paddingLeft: 13,
    },

    variants: {
        
        linkState: {
            active: {
                a: {
                    backgroundColor: '$primaryColor',
                    
                    '& svg, & .text': {
                        color: '$sidebarColor',
                    },

                    '&:hover': {
                        background: '$primaryColor',
                    },
                    '&:hover svg, &:hover .text': {
                        color: '$sidebarColor'
                    },
                }
            },
            inactive: {
                a: {
                    backgroundColor: 'transparent',
                    '&:hover': {
                        background: '$primaryColor',
                    },
                    '&:hover svg, &:hover .text': {
                        color: '$sidebarColor'
                    },
                }
            }
        }
    },

    
    

})

export const SearchBox = styled('li', {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    width: '100%',
    borderRadius: 6,
    backgroundColor: "$primaryColorLight",
    cursor: 'pointer',
    transition: "$tran05",
    padding: 13,
    gap: 20,
    
    '& svg': {
        minWidth: 30,
        borderRadius: 6,
        height: '100%',
        display: 'flex',
        fontSize: 20,
        color: "$textColor",
        transition: "$tran03"
    },

    input: {
        height: '100%',
        width: '100%',
        outline: 'none',
        border: 'none',
        backgroundColor: "$primaryColorLight",
        color: "$textColor",
        borderRadius: 6,
        fontSize: 17,
        fontWeight: 500,
        transition: "$tran05",
    }
})

export const Utils = styled('div', {
    bottom: 20
})