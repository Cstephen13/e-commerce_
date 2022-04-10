import React, {useEffect, useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import {getCategories} from "../../Filter/Filter";
import axios from "axios";
import { URL_PRODUCTS } from "../../../utils/utils";
import {TProduct} from "../../../models/model";

const ModalNewProduct = ({ refreshProducts, product, handleChangeProduct , show, handleOpenCloseModal, children }:
                             {   refreshProducts:() => void;
                                 product:TProduct;
                                 handleChangeProduct: (state) => void;
                                 show: boolean;
                                 handleOpenCloseModal:() => void;
                                 children: any
                             }) => {
    const [ categories, setCategories ] = useState([]);
    console.log(product);
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
        const products = await axios.post(URL_PRODUCTS, form, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        refreshProducts();
        handleOpenCloseModal();
    }


    return (
        <>
            { children }

            <Modal show={show} onHide={handleOpenCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
                        <input
                            value={product.name}
                            onChange={(event) => handleChangeProduct( prevState => ({ ...prevState, name: event.target.value }) )}
                               type="email" className="form-control" id="exampleFormControlInput1"
                               placeholder="Nombre"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Precio</label>
                        <input
                            value={ product.price }
                            onChange={(event) => handleChangeProduct( prevState => ({ ...prevState, price: parseInt(event.target.value) }) )}
                               type="number" className="form-control" id="exampleFormControlInput1"
                               placeholder="Precio"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Categoria</label>
                        <select
                            value={ product.category_id }
                            onChange={(event) => handleChangeProduct( prevState => ({ ...prevState, category_id: event.target.value }) )}
                                className="form-select" aria-label="Default select example">
                            <option />
                            {categories.map((category, index)=> (
                                <option key={`categorie-${index}`}
                                        selected={category.id === product.category_id}
                                        value={category.id}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control type="file" onChange={(event)=> handleChangeProduct( prevState => (
                            // @ts-ignore
                            { ...prevState, image: event.target?.files[0]}
                        ) )}/>
                    </Form.Group>
                    <div className="form-floating">
                        <textarea
                            onChange={(event) => handleChangeProduct( prevState => ({ ...prevState, description: event.target.value }) )}
                            className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                        />
                        <label htmlFor="floatingTextarea2">Descripción</label>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleOpenCloseModal}>
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