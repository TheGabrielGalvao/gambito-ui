import { FormEvent, ReactNode } from "react"

export interface Navigation {
    Id: number
    Name: string
    Label: string
    Icon: any
    Position: 'main' | 'bottom'
    Route: string
    End?: boolean
}

export interface NavigationContextData {
    navigation: Navigation[]
    handleSearch: (event: FormEvent<HTMLInputElement>) => void
    handleToggleTheme: () => void
    theme: string
}

export interface NavigationsProviderProps {
    children: ReactNode
}