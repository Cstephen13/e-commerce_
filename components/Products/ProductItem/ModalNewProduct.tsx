import React, {useEffect, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {getCategories} from "../../Filter/Filter";

const ModalNewProduct = () => {
    const [show, setShow] = useState(false);
    const [ categories, setCategories ] = useState([]);

    useEffect(()=>{
        (async () =>{
            const dataCategories = await getCategories();
            setCategories(dataCategories.data)
        })();
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="success" onClick={handleShow}>
                Nuevo Producto
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1"
                               placeholder="Nombre"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Precio</label>
                        <input type="number" className="form-control" id="exampleFormControlInput1"
                               placeholder="Precio"/>
                    </div>
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                                  />
                        <label htmlFor="floatingTextarea2">Descripción</label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Categoria</label>
                        <select className="form-select" aria-label="Default select example">
                            {categories.map((element, index)=> (
                                <option key={`categorie-${index}`} value={element.id}>{element.name}</option>
                            ))}
                        </select>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalNewProduct;