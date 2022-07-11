import { INavigation } from '../components/types';
import {
    BiHome,
    BiWallet,
    BiLogOut,
    BiWrench,
} from 'react-icons/bi'

export const navConfig: INavigation[] = [
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