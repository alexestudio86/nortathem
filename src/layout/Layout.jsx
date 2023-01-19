import { Outlet } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { Notice } from './Notice';
import { Navbar } from './Navbar';
import { Footer } from './Footer';


export function Layout ( ){
    const location = useLocation();
    return (
        <div className='w3-row h-100 w3-light-gray'>
            { location.pathname === '/' && <Notice />  }
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}