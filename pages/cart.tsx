import React from "react";
import Layout from "../components/Layouts/Layout";
import {TProduct, useCart, useCartMutations} from "../store/Cart";
import Link from "next/link";
import SummarySale from "../components/Cart/SummarySale";
import axios from "axios";

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
    const { removeFromCart } = useCartMutations();
    const payment = async () => {
        const total_sale = items.reduce((acum,product)=> acum + (product.quantity * product.price ), 0);
        const invoice = {
            total_sale,
            payment: total_sale,
            products: items.map((product) => ({ id: product.id, quantity: product.quantity, price_product: product.price }))
        }
        const { data } = await axios.post('/api/invoices', invoice);
    }
    return (
        <Layout showFilter={false}>
            <div className="row mt-2">
                <div className='col'>
                    {items.length > 0 ?  (<div className='row'>
                        <div className='col-5'>
                            {items.map((product, index)=>{
                                return (
                                    <CardProductSummary key={`product-${index}`} product={ product }
                                                        removeFromCart={ removeFromCart }/>
                                )
                            })}
                        </div>
                        <div className='col-7'>
                            <SummarySale items={items}/>
                            <div className='d-grid'>
                                <button onClick={payment}
                                    className='btn btn-success btn-b'>
                                    Pagar <i className='fas fa-money-bill'/>
                                </button>
                            </div>
                        </div>
                    </div>) : ( <div className='bg-light p-5 text-center'>Parece que todavía no has agregado nada al carrito <Link href={"/"}>
                        <a className="nav-link text-center">Volver al Comercio</a>
                    </Link> </div> )}
                </div>
            </div>
        </Layout>
    );
}

export default SummaryCar;