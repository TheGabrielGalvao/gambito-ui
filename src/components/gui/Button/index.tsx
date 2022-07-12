import { ReactNode } from "react"
import { StyledButton } from "./styles"


export interface ButtonProps {
    children: ReactNode
    color?: 'transparent' |  'default' |  'primary' |  'success' |  'warning' |  'danger'
}

export const Button = ({children, color}: ButtonProps) => {
    return (
        <StyledButton color={color ?? 'default'}>
            {children}
        </StyledButton>
    )
}