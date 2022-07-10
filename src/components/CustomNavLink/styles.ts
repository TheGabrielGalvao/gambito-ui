import { styled } from "@stitches/react";

export const NavLinkContainer = styled('div', {
    variants:{
        dynamicStyle: {
            active: {
                a: {
                    background: '$primaryColor',
    
                    '& svg, .text': {
                        color: '$sidebarColor'
                    }
                }
            }
        }
    }
})