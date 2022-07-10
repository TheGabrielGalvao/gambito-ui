import { Navigation, MenuItem, MenuLogo, Main, SearchBox, StyledMenu, Utils } from "./styles";
import {
    BiChevronRight, 
    BiHome,
    BiBarChartAlt2,
    BiBell,
    BiPieChartAlt,
    BiHeart,
    BiWallet,
    BiSearch,
    BiLogOut,
    BiWrench,
} from 'react-icons/bi'
import logo from '../../assets/img/logo.png'
import { FormEvent, useState } from "react";
import { dark, light } from "../../util/stitches.config";
import { INavigation } from "../types";
import { CustomNavLink } from "../CustomNavLink";



const MenuList: INavigation[] = [
    {
        Id: 1,
        Name: 'dashboard',
        Label: 'Dashboard',
        Icon: <BiHome />,
        Position: 'main',
        Route: '/',
        End: true
    },
    {
        Id: 2,
        Name: 'wallets',
        Label: 'Carteiras',
        Icon: <BiWallet />,
        Position: 'main',
        Route: '/wallets'
    },

    {
        Id: 3,
        Name: 'adjusts',
        Label: 'Ajustes',
        Icon: <BiWrench />,
        Position: 'bottom',
        Route: '/settings'
    },

    {
        Id: 4,
        Name: 'logout',
        Label: 'Logout',
        Icon: <BiLogOut />,
        Position: 'bottom',
        Route: '/logout'
    },
]

export const Menu = () => {
    const [toggle, setToggle] = useState<'open' | 'close'>('close')
    const [theme, setTheme] = useState<string>(light)
    const [search, setSearch] = useState('')
    const [navigation, setNavigation] = useState<INavigation[]>(MenuList)

    function handleSearchChange(event: FormEvent<HTMLInputElement>) {
        setSearch(event.currentTarget.value.toLowerCase())
        if(search.length > 2){
            setNavigation([...MenuList].filter(item => item.Label.toLowerCase().indexOf(search) !== -1))
        }
        else{
            setNavigation(MenuList)
        }
    }

    const handleToggle = () => {
        setToggle(toggle === 'open' ? 'close' : 'open')
    }

    const handleToggleTheme = () => {
        setTheme(theme === light ? dark : light)
    }

    return (
        <StyledMenu toggle={toggle} className={theme}>
            <header>
                <MenuLogo>
                    <span className="image">
                        <img src={logo} alt="" />
                    </span>
                    <div className="text">
                        <span className="name">Gambito</span>
                        <span className="profession">React JS</span>
                    </div>
                </MenuLogo>
                <BiChevronRight onClick={handleToggle}/>
            </header>
            
            <Navigation>
                <Main>
                    <SearchBox>
                        <BiSearch onClick={handleToggle}/>
                        <input type="text" placeholder="Search..." onChange={handleSearchChange} />
                    </SearchBox>
                    {
                        navigation.map(item => (
                                item.Position === 'main' ? <CustomNavLink Link={item} /> : ''
                        ))
                    }
                </Main>
                <Utils>
                    {
                        navigation.map(item => (
                                item.Position === 'bottom' ? <CustomNavLink Link={item} /> : ''
                        ))
                    }
                </Utils>
            </Navigation>
        </StyledMenu>
    )
}