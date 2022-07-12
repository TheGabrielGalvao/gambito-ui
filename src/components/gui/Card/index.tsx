import { ReactNode } from "react"
import { BiDotsHorizontal, BiDotsHorizontalRounded, BiUpArrowAlt } from "react-icons/bi"
import { Button, ButtonProps } from "../Button"
import { Container } from "./styles"

interface Props {
    children?: ReactNode
    header?: {
        title?: string
        icon?: ReactNode
        button?: ButtonProps
    }
    background?: 'transparent' |  'default' |  'primary' |  'success' |  'warning' |  'danger'
}  

export const Card = ({children, header, background}: Props) => {
    return(
        <Container background={background}>
            <header>
                <p>{header?.title}</p>
                {
                    header?.button &&
                        <Button color={header.button?.color}>
                            {header.button?.children}
                        </Button>
                }
            </header>
            {/* <strong>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(5000)}
            </strong> */}
            {children}
        </Container>
    )
}