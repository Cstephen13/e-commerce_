import React from "react";
import Layout from "../components/Layouts/Layout";
import {TProduct, useCart, useCartMutations} from "../store/Cart";

const CardProductSummary = ({ product, removeFromCart }:{ product: TProduct & { quantity:number }, removeFromCart: any }) => {
    return (
        <div className='card border-primary mb-3 shadow-lg bg-body rounded'>
            <div className="row g-0">
                <div className="col-md-4">
                    <img  src={ product.image } className="img-fluid rounded-start" alt={ product.name }/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{ product.name }</h5>
                        <p className="card-text">{ product.description }</p>
                        <p className="card-text"><small className="text-muted">{product.quantity} X ${ product.price.toLocaleString('es-CO') }</small></p>
                        <button onClick={() => {
                            removeFromCart(product);
                        }} className='btn btn-link float-end text-danger'>
                            <i className='fas fa-trash'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const SummaryCar = () => {
    const { items, count } = useCart();
    const { removeFromCart } = useCartMutations()
    return (
        <Layout showFilter={false}>
            <div className="row mt-2">
                <div className='col'>
                    <div className='row'>
                        <div className='col-5'>
                            {items.map((product, index)=>{
                                return (
                                    <CardProductSummary key={`product-${index}`} product={ product }
                                                        removeFromCart={ removeFromCart }/>
                                )
                            })}
                        </div>
                        <div className='col-4'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Producto</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((product, index) => {
                                        return (
                                            <tr className='text-center' key={`product-summary-${index}`}>
                                                <td>{product.name}</td>
                                                <td>{ product.price.toLocaleString('es-CO') }</td>
                                                <td>{product.quantity}</td>
                                                <td>{(product.quantity * product.price).toLocaleString('es-CO')}</td>
                                            </tr>
                                        )
                                    })}
                                    <tr>
                                        <td colSpan={2} className='text-center'>
                                            Total:
                                        </td>
                                        <td colSpan={2}  className='text-center'>
                                            { items.reduce((acum,product)=> acum + (product.quantity * product.price ), 0).toLocaleString('es-CO')}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='d-grid'>
                                <button className='btn btn-success btn-b'>Pagar <i className='fas fa-money-bill'/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default SummaryCar;