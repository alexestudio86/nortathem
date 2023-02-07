import { Outlet } from 'react-router-dom';


export function Pages ( ) {
    return (
        <div className='container py-4'>
            <div className="bg-white p-3">
                <Outlet />
            </div>
        </div>
    )
}