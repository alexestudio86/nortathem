import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { NotFoundView } from "../views/NotFoundView";
import { HomeView } from "../views/HomeView";
import { Pages } from "../views/Pages";
import { Nosotros } from "../pages/Nosotros";
import { Certificate } from "../pages/Certificate";
import { Home } from "../pages/certificate/Home";



export const rutas = createBrowserRouter([
    {
        element:    <Layout />,
        path:       '/',
        errorElement: <NotFoundView />,
        children:   [
            {
                index:      true,
                element:    <HomeView />
            },{
                element:    <Pages />,
                children:   [
                    {
                        element:    <Nosotros />,
                        path:       'nosotros'
                    },{
                        element:    <Certificate />,
                        path:       'certificate',
                        children:   [
                            {
                                element: <Home />,
                                path:   'home'
                            }
                        ]
                    }
                ]
            }
        ]
    }
])