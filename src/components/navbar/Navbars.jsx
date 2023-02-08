import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export function NavCompact(){
    return (
        <Navbar bg="white" sticky="top" >
            <Container>
                <NavLink className='btn' to='/'>
                    <i className='fas fa-home fa-2x text-white'></i>
                </NavLink>
                <NavLink className='btn btn-dark d-block d-sm-none' to='/checkout'>
                    <i className='fas fa-shopping-cart fa-lg me-1'></i>
                    <span className='badge rounded-pill bg-danger'>0</span>
                </NavLink>
            </Container>
        </Navbar>
    )
}



const active = 'nav-link text-uppercase active';
const inactive = 'nav-link text-uppercase';

export function NavFull( ){
    return (
        <>
            <Navbar bg="white" expand="lg" sticky="top" id='navfull'>
                <Container>
                    <NavLink className='navbar-brand d-none d-sm-block' to='/'>
                        <img src={ require('../../assets/theme/logo-nortathem.png') } alt='Logo arminda' height='74' />
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className='nav-link text-uppercase' to={"nosotros"}>Nosotros</NavLink>
                        <NavLink className='nav-link text-uppercase' to={"certificate"}>Certifícate</NavLink>
                        <NavDropdown className='text-uppercase' title="Nortathem" id="basic-nav-dropdown">
                            <NavLink className="dropdown-item" to={"nortathem/evaluadores"}>Evaluadores</NavLink>
                            <NavLink className="dropdown-item" to={"nortathem/franquicias"}>Franquicias</NavLink>
                            <NavLink className="dropdown-item" to={"nortathem/eventos"}>Eventos</NavLink>
                        </NavDropdown>
                        <NavLink className='nav-link text-uppercase' to={"contacto"}>Contacto</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink className='nav-link' to={"login"}>
                            <i className="fa-solid fa-user"></i>
                        </NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}