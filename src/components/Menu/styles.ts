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
            color: '$textColor',
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
                    border: '1px solid $white',   

                    '& svg, & .text': {
                        color: '$moduleIconActiveColor'
                    },

                    '&:hover': {
                        background: '$primaryColor',
                    },
                    '&:hover svg, &:hover .text': {
                        color: '$moduleIconActiveColor'
                    },
                }
            },
            inactive: {
                a: {
                    backgroundColor: 'transparent',
                    '&:hover': {
                        background: '$primaryColor',
                        border: '1px solid $white',
                    },
                    '&:hover svg, &:hover .text': {
                        color: '$moduleIconActiveColor'
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

export const Layout = styled('div', {
    display: 'flex', 
    justifyContent: 'center',
    backgroundColor: '$bodyColor',
    width: '100vw',
    height: '100vh'
})

export const ThemeSwitcher = styled('li', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    listStyle: 'none',
    width: '100%',
    borderRadius: 6,
    backgroundColor: "$primaryColorLight",
    cursor: 'pointer',
    transition: "$tran05",
    padding: 13,
    gap: 20,
    
    variants: {
        toggle: {
            open: {
                '& svg': {
                    minWidth: 20,
                    borderRadius: 6,
                    height: '100%',
                    display: 'flex',
                    fontSize: 20,
                    color: "$textColor",
                    transition: "$tran03"
                },
            },
            close: {
                flex: 1,
                '& svg': {
                    display: 'none'
                }
            }
        }
    }

    
})

export const ToggleSwitch = styled('div', {
    position: 'absolute',
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    cursor: 'pointer',

    '& .switch': {
        position: 'relative',
        height: 22,
        width: 40,
        borderRadius: 25,
        backgroundColor: '$toggleColor',
        transition: '$tran05',
    }
})