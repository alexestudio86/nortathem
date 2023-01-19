import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { NotFoundView } from "../views/NotFoundView";
import { HomeView } from "../views/HomeView";



export const rutas = createBrowserRouter([
    {
        element:    <Layout />,
        path:       '/',
        errorElement: <NotFoundView />,
        children:   [
            {
                index:      true,
                element:    <HomeView />
            }
        ]
    }
])