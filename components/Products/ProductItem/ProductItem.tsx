import React from "react";
import {Button, Card} from "react-bootstrap";
import { TProduct } from "../../../models/model";
import {BadgeCart} from "../../NavBar/CartButton";

const ProductItem = ({ product, catItem,removeFromCart, addToCart }: {
    product:TProduct, catItem?: TProduct & { quantity: number },
    removeFromCart:any, addToCart:any
}) => {
    const add = () => {
        addToCart(product)
    }
    return (
        <div className="col-4" >
            <div className="card mb-3" >
                <img src={product.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">{ product.description }</p>
                    <button onClick={add} className="btn btn-link text-decoration-none float-right">
                        <i className="fas fa-cart-plus"/>
                        {catItem && <BadgeCart number={ catItem.quantity }/>}
                    </button>
                </div>
                <div className="card-footer">
                    <h6 >{ product.name } | ${ product.price.toLocaleString('es-CO') }</h6>
                    <span className="badge rounded-pill bg-primary">{ product.category }</span>
                </div>
            </div>
        </div>
    )
}

export default ProductItem