import { useEffect, useState } from "react"
import { NavLink, useLocation, useMatch } from "react-router-dom"
import { MenuItem } from "../Menu/styles"
import { INavigation } from "../../types"

export interface CustonNavLinkProps {
    Link: INavigation
}


export const CustomNavLink = ({Link} : CustonNavLinkProps) => {
    const match = useMatch(Link.Route)
    const location = useLocation()
    const [active, setActive] = useState(false)

    useEffect(
        () => {
            setActive(location.pathname === match?.pathname)
        }
    )

    
    return (
        <MenuItem linkState={active ? 'active' : 'inactive'}>
            <NavLink to={Link.Route} end={Link.End}>
                    {Link.Icon}
                    <span className="text nav-text">{Link.Label}</span>
            </NavLink>
        </MenuItem>
    )
}