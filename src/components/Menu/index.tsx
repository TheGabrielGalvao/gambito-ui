import { Navigation, Main, SearchBox, StyledMenu, Utils, ThemeSwitcher, MenuItem, ToggleSwitch } from "./styles";
import {
    BiChevronRight, 
    BiMoon, 
    BiSearch,
    BiSun,
} from 'react-icons/bi'
import logo from '../../assets/img/logo.png'
import { useState } from "react";
import { CustomNavLink } from "../CustomNavLink";
import { useNavigation } from "../../hooks/useNavigation";
import { MenuLogo } from "./components/MenuLogo";
import { CustomInput } from "../CustomInput";
import { CustomSwitch } from "../CustomSwitch";
import { dark } from "../../util/stitches.config";


export const Menu = () => {
    const [toggle, setToggle] = useState<'open' | 'close'>('close')
    const {navigation, handleSearch, theme} = useNavigation()

    const handleToggle = () => {
        setToggle(toggle === 'open' ? 'close' : 'open')
    }

    return (
        <StyledMenu toggle={toggle}>
            <header>
                <MenuLogo img={logo} title="Gambito" legend="React JS" />
                <BiChevronRight onClick={handleToggle}/>
            </header>
            
            <Navigation>
                <Main>
                    <SearchBox>
                        <BiSearch onClick={handleToggle}/>
                        <CustomInput handleChange={handleSearch} placeholder="Search..." type="text" />
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
                    <MenuItem>
                        <ThemeSwitcher toggle={toggle}>
                            <div className="icon">
                                {
                                    theme === dark 
                                    ? <BiSun />
                                    : <BiMoon />
                                }
                            </div>
                            <span className="text">
                                {
                                    theme === dark
                                    ? 'Light mode'
                                    : 'Dark mode'
                                }
                            </span>
                            <CustomSwitch toggle={toggle} />
                        </ThemeSwitcher>
                    </MenuItem>
                </Utils>
            </Navigation>
        </StyledMenu>
    )
}