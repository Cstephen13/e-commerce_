import React, {useEffect, useState} from "react";
import Layout from "../../components/Layouts/Layout";
import { getProducts } from "../../components/Products/Products/ListStoreProducts";
import ModalNewProduct from "../../components/Products/ProductItem/ModalNewProduct";
import {TProduct} from "../../models/model";
import {Button} from "react-bootstrap";

const RowItemProduct = ({ product, children  }:
                            {
                                product: TProduct; children:any}) => {
    return (
        <tr>
            <td>
                <img style={{ width:35, height:35}} src={product.image} className="rounded-pill" alt={product.name}/>
            </td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.category}</td>
            <td>${product.price.toLocaleString('es-CO')}</td>
            <td>
                { children }
                <button className='btn btn-link text-danger'><i className='fas fa-trash'/></button>
            </td>
        </tr>
    )
}


const Products = () => {
    const [ products, setProducts ] = useState([]);
    const [show, setShow] = useState(false);
    const baseProduct:TProduct = {
        name:'',
        description: '',
        price: 0,
        image: '',
        category_id: '',
    }
    const [product, setProduct] = useState<TProduct>(baseProduct);
    const refreshProducts = async () => {
        const products = await getProducts();
        setProducts(products);
    }
    useEffect(()=> {
        (async () => {
            await refreshProducts()
        })();
    }, []);

    const handleOpenCloseModal = () => setShow(!show);

    return (
        <div className='row'>
            <Layout showFilter={false}>
                <div className='row mt-5 mb-4'>
                    <div className="col">
                        <h3 className='text-center'>Productos</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <ModalNewProduct refreshProducts={refreshProducts}
                                         product={product}
                                         handleChangeProduct={setProduct}
                                         show={show}
                                         handleOpenCloseModal={handleOpenCloseModal}>
                            <Button variant="success" onClick={handleOpenCloseModal}>
                                Nuevo Producto
                            </Button>
                        </ModalNewProduct>

                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className='table-responsive'>
                            <table className='table table-striped'>
                                <thead>
                                <tr>
                                    <td></td>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                    <th>Categoría</th>
                                    <th>Precio</th>
                                    <th>Acciones</th>
                                </tr>
                                </thead>
                                <tbody>
                                    { products.length > 0 ? products.map((productObject, index)=> {
                                        return (
                                            <RowItemProduct product={ productObject }  >
                                                <Button color='text-info' variant="link" onClick={() =>{
                                                    console.log(productObject);
                                                    setProduct(productObject);
                                                    handleOpenCloseModal()
                                                }}>
                                                    <i className='fas fa-pencil' />
                                                </Button>
                                            </RowItemProduct>
                                        )
                                    }) : <tr><td colSpan={6}>No hay datos para mostrar</td></tr>}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Products;