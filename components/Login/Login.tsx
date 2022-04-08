import React, {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import Link from "next/link";

const Login = () => {
    const [show, setShow] = useState(false);
    const [ login, setLogin ] = useState({
        email: '',
        password: '',
    });
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                 Iniciar Sesión <i className='fas fa-sign-in-alt'/>
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Iniciar Sesión</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                        <input onChange={(event) => setLogin( prevState => ({ ...prevState, email: event.target.value }) )}
                               type="email" className="form-control" id="exampleFormControlInput1"
                               placeholder="Email"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Contraseña</label>
                        <input onChange={(event) => setLogin( prevState => ({ ...prevState, password: event.target.value }) )}
                               type="password" className="form-control" id="exampleFormControlInput1"
                               placeholder="Contraseña"/>
                    </div>
                    <Link href={"/sing-up"}>
                        <a className="nav-link text-center">Registrate</a>
                    </Link>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={() => console.log()}>
                        Enviar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Login;