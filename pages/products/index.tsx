import React, {useEffect, useState} from "react";
import Layout from "../../components/Layouts/Layout";
import { getProducts } from "../../components/Products/Products/ListStoreProducts";
import {TProduct} from "../../store/Cart";
import ModalNewProduct from "../../components/Products/ProductItem/ModalNewProduct";

const RowItemProduct = ({ product }:{ product: TProduct }) => {
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
                <button className='btn btn-link text-danger'><i className='fas fa-trash'/></button>
                <button className='btn btn-link text-info'><i className='fas fa-pencil'/></button>
            </td>
        </tr>
    )
}


const Products = () => {
    const [ products, setProducts ] = useState([]);
    const refreshProducts = async () => {
        const products = await getProducts();
        setProducts(products);
    }
    useEffect(()=> {
        (async () => {
            await refreshProducts()
        })();
    }, []);

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
                        <ModalNewProduct refreshProducts={refreshProducts}/>
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
                                    { products.length > 0 ? products.map((product, index)=> {
                                        return (
                                            <RowItemProduct product={ product } />
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