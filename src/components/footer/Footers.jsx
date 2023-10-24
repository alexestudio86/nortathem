export function FooterCompact ( ){
    return (
        <div className='bg-dark' id='footerFull'>
            <div className='container py-2'>
                <div className='row'>
                    <div className='col-md-12 text-center'>By Alex Estudio 86</div>
                </div>
            </div>
        </div>
    )
}


export function FooterFull( ){
    return (
        <div className='bg-secondary'>
            <div className='container py-2'>
                <div className='row'>
                    <div className='col-md-6'>
                        { /* related documents */ }
                        <h1 className='text-center fs-2 text-white py-2'>Links</h1>
                        <ul className='list-group text-center'>
                            <li className='list-group-item'>
                                <a href='#' className='link-primary'>Términos y condiciones</a>
                            </li>
                            <li className='list-group-item'>
                                <a href='#' className='link-primary'>Aviso de privacidad</a>
                            </li>
                            <li className='list-group-item'>
                                <a href='#' className='link-primary'>Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-6 text-center'>
                    { /* contact information */ }
                        <h1 className='text-center fs-2 text-white py-2'>Redes</h1>
                        <ul className='list-group text-center'>
                            <li className='list-group-item'>
                                <a className='text-dark' href='#'>
                                    <i className='fab fa-facebook fa-lg me-1'></i>
                                </a>
                                <a className='text-dark' href='#'>
                                    <i className='fab fa-twitter fa-lg me-1'></i>
                                </a>
                                <a className='text-dark' href='#'>
                                    <i className='fab fa-instagram fa-lg'></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}