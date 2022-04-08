import React, {useEffect, useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import {getCategories} from "../../Filter/Filter";
import {TProduct} from "../../../store/Cart";
import axios from "axios";

const ModalNewProduct = ({ refreshProducts }) => {
    const [show, setShow] = useState(false);
    const [product, setProduct] = useState<TProduct>({
        name:'',
        description: '',
        price: 0,
        image: '',
        category_id: '',
    });
    const [ categories, setCategories ] = useState([]);

    useEffect(()=>{
        (async () =>{
            const dataCategories = await getCategories();
            setCategories(dataCategories.data)
        })();
    }, []);

    const saveProduct = async () => {
        const form = new FormData();
        Object.keys(product).map((key) => {
            if (key == 'image'){
                // @ts-ignore
                form.append(key, product[key], product[key].name);
            }else{
                form.append(key, product[key]);
            }
        });
        const products = await axios.post('http://localhost:8000/api/v1.0/products/products/', form, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        refreshProducts();
        handleClose();
    }
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
                        <input onChange={(event) => setProduct( prevState => ({ ...prevState, name: event.target.value }) )}
                               type="email" className="form-control" id="exampleFormControlInput1"
                               placeholder="Nombre"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Precio</label>
                        <input onChange={(event) => setProduct( prevState => ({ ...prevState, price: parseInt(event.target.value) }) )}
                               type="number" className="form-control" id="exampleFormControlInput1"
                               placeholder="Precio"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Categoria</label>
                        <select onChange={(event) => setProduct( prevState => ({ ...prevState, category_id: event.target.value }) )}
                                className="form-select" aria-label="Default select example">
                            <option />
                            {categories.map((element, index)=> (
                                <option key={`categorie-${index}`} value={element.id}>{element.name}</option>
                            ))}
                        </select>
                    </div>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control type="file" onChange={(event)=> setProduct( prevState => (
                            // @ts-ignore
                            { ...prevState, image: event.target?.files[0]}
                        ) )}/>
                    </Form.Group>
                    <div className="form-floating">
                        <textarea
                            onChange={(event) => setProduct( prevState => ({ ...prevState, description: event.target.value }) )}
                            className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                        />
                        <label htmlFor="floatingTextarea2">Descripción</label>
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

export default ModalNewProduct;