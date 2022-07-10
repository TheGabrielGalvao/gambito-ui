export interface INavigation {
    Id: number
    Name: string
    Label: string
    Icon: any
    Position: 'main' | 'bottom'
    Route: string
    End?: boolean
}