import React, { useState } from "react";
import {Button, Modal} from "react-bootstrap";
import axios from "axios";

const ModalNewCategory = ({ refreshCategories }) => {
    const [show, setShow] = useState(false);
    const [categoryObject, setCategory] = useState({
        name:'',
    });

    const saveProduct = async () => {
        //const category = await axios.post('http://localhost:8000/api/v1.0/categories/categories', params);
        const { data } = await axios.post('/api/categories', categoryObject);
        refreshCategories();
        handleClose();
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="success" onClick={handleShow}>
                Nuevo Categoría
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo Categoría</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
                        <input onChange={(event) => setCategory( prevState => ({ ...prevState, name: event.target.value }) )}
                               type="email" className="form-control" id="exampleFormControlInput1"
                               placeholder="Nombre"/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={saveProduct}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalNewCategory;