import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


export function Certificate ( ) {
    return (
        <>
            <h1>¿Qué es una Certificación?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Miembro Incorporado</Accordion.Header>
                <Accordion.Body>
                <h3>Beneficios y requisitos</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                <form>
                    <p>Contacto</p>
                    <input type="text" />
                </form>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Franquisica incorporada</Accordion.Header>
                <Accordion.Body>
                <h3>Beneficios y requisitos</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                <form>
                    <p>Contacto</p>
                    <input type="text" />
                </form>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            <div className="d-flex justify-content-between">
                <Link className="btn btn-primary" to={'./tipos-de-certificacion'} >Tipos de certificación</Link>
            </div>
            <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" as={Link} to={`./home`} title="Home">
                    <p>Home</p>
                </Tab>
                <Tab eventKey="profile" as={Link} to={`./profile`} title="Profile">
                    <p>Profile</p>
                </Tab>
                <Tab eventKey="contact" as={Link} to={`./contact`} title="Contact">
                    <p>Contact</p>
                </Tab>
            </Tabs>
        </>
    )
}