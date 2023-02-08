import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function ContactForm ( ){
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="email" placeholder="José Perez León" />
                <Form.Text className="text-muted">Nunca compartiremos tu correo con nadie</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Asunto:</Form.Label>
                <Form.Control type="text" placeholder="Hola..." />
            </Form.Group>
            <Button variant="primary" type="submit">Enviar</Button>
        </Form>
    )
}

export function LoginForm ( ){

    const navigate = useNavigate()
    const [login, setLogin] = useState(false);
    useEffect( ( ) => {
        if(login){
            navigate('007')
        }
    },[login])

    return (
        <Form onSubmit={ (e) => {
            e.preventDefault();
            setLogin(true);
        }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="jose@gmail.com" value='petitpua.imagen@gmail.com' />
                <Form.Text className="text-muted">Nunca compartiremos tu correo con nadie</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="123456" value='123456' />
            </Form.Group>
            <Button variant="primary" type="submit">Login</Button>
        </Form>
    )
}