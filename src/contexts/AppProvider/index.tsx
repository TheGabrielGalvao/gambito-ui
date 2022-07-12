import { createContext, FormEvent, useContext, useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom"
import { Layout, Menu } from "../../components/gui"
import { navConfig } from "../../util/navigation.config"
import { dark, globalStyles, light } from "../../util/stitches.config"
import { Content } from "./styles"
import { App, AppContextData, AppsProviderProps } from "./types"

export const AppContext = createContext<AppContextData>({} as AppContextData)

export const AppProvider = ({children}: AppsProviderProps) => {
    const [theme, setTheme] = useState<string>(light)
    const [search, setSearch] = useState('')
    const [navigation, setApp] = useState<App[]>(navConfig)

    useEffect(() => {
      
    }, [])

    const handleSearchChange = (event: FormEvent<HTMLInputElement>) => {
        setSearch(event.currentTarget.value.toLowerCase())
        
        if(search.length > 1){
            setApp([...navConfig].filter(item => item.Label.toLowerCase().indexOf(search) !== -1))
        }
        else{
            setApp(navConfig)
        }
    }

    const handleToggleTheme = () => {
        setTheme(theme === light ? dark : light)
    }

    globalStyles()
    return (
        <AppContext.Provider value={{ navigation, handleSearch: handleSearchChange, theme, handleToggleTheme}}>
            <BrowserRouter>
                <Layout className={theme}>
                    <Menu />
                    <Content>
                        {children}
                    </Content>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    )

}