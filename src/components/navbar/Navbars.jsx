import { Link, NavLink } from 'react-router-dom';


export function NavCompact(){
    return (
        <nav className='navbar navbar-white bg-white sticky-top'>
            <div className='container'>
                <Link className='btn' to='/'>
                    <i className='fas fa-home fa-2x text-white'></i>
                </Link>
                <Link className='btn btn-dark d-block d-sm-none' to='/checkout'>
                    <i className='fas fa-shopping-cart fa-lg me-1'></i>
                    <span className='badge rounded-pill bg-danger'>0</span>
                </Link>
            </div>
        </nav>
    )
}



const active = 'nav-link text-uppercase active';
const inactive = 'nav-link text-uppercase';

export function NavFull( ){
    return (
        <nav className='navbar navbar-expand-lg navbar-white bg-white sticky-top' id='navfull'>
            <div className='container'>
                <NavLink className='navbar-brand d-none d-sm-block' to='/'>
                    <img src={ require('../../assets/theme/logo-nortathem.png') } alt='Logo arminda' height='74' />
                </NavLink>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <i className='navbar-toggler-icon'></i>
                </button>
                <NavLink className='btn btn-dark d-block d-sm-none' to='/checkout' >
                    <i className='fas fa-shopping-cart fa-lg me-1'></i>
                    <span className='badge rounded-pill bg-danger'></span>
                </NavLink>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item dropdown'>
                            <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" to="evaluadores">Evaluadores</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" to="franquicias">Franquicias</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" to="eventos">Eventos</a>
                                </li>
                            </ul>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link text-uppercase' to='contacto'>
                                Contact
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link text-uppercase' to='certificate'>
                                ¡Certifícate!
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link text-uppercase' to='nosotros'>
                                Nosotros
                            </NavLink>
                        </li>
                    </ul>
                    <form className='d-flex' >
                        <button className='btn btn-outline-secondary' >Login</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}