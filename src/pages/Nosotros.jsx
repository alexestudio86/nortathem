import { Link } from "react-router-dom";


export function Nosotros ( ) {
    return (
        <>
            <h1>Misión</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <h1>Visión</h1>
            <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <h1>Objetivos</h1>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <h1>Valores</h1>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <Link to={'./evaluadores'}>Nuestros evaluadores</Link>
        </>
    )
}