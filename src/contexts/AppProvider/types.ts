import { ChangeEventHandler, FormEvent, ReactNode } from "react"

export interface App {
    Id: number
    Name: string
    Label: string
    Icon: ReactNode
    Position: 'main' | 'bottom'
    Route: string
    End?: boolean
}

export interface AppContextData {
    navigation: App[]
    handleSearch: ChangeEventHandler<HTMLInputElement>
    handleToggleTheme: () => void
    theme: string
}

export interface AppsProviderProps {
    children: ReactNode
}