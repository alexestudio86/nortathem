import './header.css';
import { Link } from 'react-router-dom';


export function Headers ( ) {
    return (
        <header className='bg-header w3-row'>
            <div className='w3-col s12 h-100 black-transparent-medium'>

                    <div className='w3-cell-row container h-100'>
                        <div className='w3-cell w3-container w3-cell-middle'>
                            <h2 className='w3-jumbo w3-text-white py-2'>Nortathem</h2>
                            <p className='w3-xxlarge w3-text-white py-2'>Lo mejor al mejor precio</p>
                        </div>
                    </div>

            </div>
        </header>
    )
}