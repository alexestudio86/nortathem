import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { NotFoundView } from "../views/NotFoundView";
import { HomeView } from "../views/HomeView";
import { Pages } from "../views/Pages";
import { Nosotros } from "../pages/nosotros/Nosotros";
import { LayoutCertificate } from '../pages/certificate/LayoutCertificate'
    import { Certificate } from "../pages/certificate/Certificate";
    import { TiposDeCertificacion } from "../pages/certificate/TiposDeCertificacion";
    import { Instructor } from "../pages/certificate/Instructor";
    import { Especialidad } from "../pages/certificate/Especialidad";
import { LayoutNortathem } from "../pages/nortathem/LayoutNortathem";
    import { Nortathem } from "../pages/nortathem/Nortathem";
    import { Eventos } from "../pages/nortathem/Eventos";
    import { Franquicias } from "../pages/nortathem/Franquicias";
    import { Evaluadores } from "../pages/nortathem/Evaluadores";
import { Contacto } from "../pages/contacto/Contacto";
import { LayoutLogin } from "../pages/login/LayoutLogin";
    import { Login } from "../pages/login/Login";
    import { User } from "../pages/login/User";


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
                        element:    <LayoutCertificate />,
                        path:       'certificate',
                        children:   [
                            {
                                element:    <Certificate />,
                                path:       ''
                            },{
                                element:    <TiposDeCertificacion />,
                                path:       'tipos-de-certificacion'
                            },{
                                element:    <Instructor />,
                                path:       'instructor'
                            },{
                                element:    <Especialidad />,
                                path:       'especialidad'
                            }
                                    ]
                    },{
                        element:    <LayoutNortathem />,
                        children: [
                            {
                                element:    <Nortathem />,
                                path:       "nortathem"
                            },{
                                element:    <Eventos />,
                                path:       "nortathem/eventos"
                            },{
                                element:    <Franquicias />,
                                path:       "nortathem/franquicias"
                            },{
                                element:    <Evaluadores />,
                                path:       "nortathem/evaluadores"
                            }
                        ]
                    },{
                        element:    <Contacto />,
                        path:       'contacto'
                    },{
                        element:    <LayoutLogin />,
                        children: [
                            {
                                element:    <Login />,
                                path:       "login"
                            },{
                                element:    <User />,
                                path:       "login/:userId"
                            }
                        ]
                    }
                ]
            }
        ]
    }
], {
    basename: "/nortathem"
})