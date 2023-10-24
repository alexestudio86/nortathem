import { useLocation } from "react-router-dom";
import { NavFull } from "../components/navbar/Navbars";


export function Navbar ( ){
    const location = useLocation();
    return (
        <>
            <NavFull />
        </>
    )
}