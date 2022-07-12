import { ReactNode } from "react"
import { ButtonProps } from "../gui/Button"
import { Card } from "../gui/Card"
import { Container } from "./styles"

interface Props {
    body?:{
        title?: string
        icon?: ReactNode
        children?: ReactNode
        value?: number
        background?: 'transparent' |  'default' |  'primary' |  'success' |  'warning' |  'danger'
    }
    header?: {
        title?: string
        icon?: ReactNode
        button?: ButtonProps
    }
    
}

export const Resume = ({body, header}: Props) => {
    return (
        <Card background={body?.background} header={header} >
            <Container>
                <header>
                    <p>{body?.title ?? 'Título'}</p>
                    {body?.icon}
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(body?.value ?? 0)}
                </strong>
            </Container>
        </Card>
    )
}