import { StyledLogo } from "./styles"

interface LogoProps {
    img?: string | undefined
    title?: string
    legend?: string
}

export const MenuLogo = ({img, title, legend}: LogoProps) => {

    return (
        <StyledLogo>
            <span className="image">
                {
                    img !== undefined
                    ? <img src={img} alt={title} />
                    : <div style={{background: '#c23', width: '100%'}}></div>
                }
            </span>
            <div className="text">
                <span className="name">{title}</span>
                <span className="profession">{legend}</span>
            </div>
        </StyledLogo>
    )
}
