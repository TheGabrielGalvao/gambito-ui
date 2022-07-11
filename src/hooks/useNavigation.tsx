import { createContext, FormEvent, useContext, useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom"
import { Layout } from "../components/Menu/styles"
import { navConfig } from "../util/navigation.config"
import { dark, globalStyles, light } from "../util/stitches.config"
import { Navigation, NavigationContextData, NavigationsProviderProps } from "./types"

const NavigationContext = createContext<NavigationContextData>({} as NavigationContextData)

export const NavigationProvider = ({children}: NavigationsProviderProps) => {
    const [theme, setTheme] = useState<string>(light)
    const [search, setSearch] = useState('')
    const [navigation, setNavigation] = useState<Navigation[]>(navConfig)

    useEffect(() => {
      
    }, [])

    const handleSearchChange = (event: FormEvent<HTMLInputElement>) => {
        setSearch(event.currentTarget.value.toLowerCase())
        
        if(search.length > 1){
            setNavigation([...navConfig].filter(item => item.Label.toLowerCase().indexOf(search) !== -1))
        }
        else{
            setNavigation(navConfig)
        }
    }

    const handleToggleTheme = () => {
        setTheme(theme === light ? dark : light)
    }

    globalStyles()
    return (
        <NavigationContext.Provider value={{ navigation, handleSearch: handleSearchChange, theme, handleToggleTheme}}>
            <BrowserRouter>
                <Layout className={theme}>
                    {children}
                </Layout>
            </BrowserRouter>
        </NavigationContext.Provider>
    )

}

export const useNavigation = () => {
    const context = useContext(NavigationContext)

    return context
}
