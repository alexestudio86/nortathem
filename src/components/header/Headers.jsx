import './header.css';
import { Link } from 'react-router-dom';


export function Headers ( ) {
    return (
        <header className='bg-header w3-row'>
            <div className="w3-half h-100 black-transparent-medium">
                <div className='w3-cell-row h-100'>
                    <div className='w3-cell w3-container w3-cell-middle'>
                        <h2 className='w3-jumbo w3-text-white py-2'>Nortathem</h2>
                        <p className='w3-xxlarge w3-text-white py-2'>Lo mejor al mejor precio</p>
                    </div>
                </div>
            </div>
            <div className="w3-half h-100">
                <div className='w3-display-container h-100'>
                    <div className='w3-display-middle'>
                        <a className='w3-button w3-white w3-padding-large w3-large w3-opacity w3-hover-opacity-off' href="#">Leer mas...</a>
                    </div>
                </div>
            </div>
        </header>
    )
}