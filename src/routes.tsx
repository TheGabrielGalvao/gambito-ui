import { useRoutes } from "react-router-dom";
import { Finance } from "./pages/Finance";
import { Home } from "./pages/Home";

export const AppRoutes = () => (
    useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/wallets',
            element: <Finance />
        },
    ])
)

