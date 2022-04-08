import React, {useEffect, useState} from "react";
import axios from "axios";
import ProductItem from "../ProductItem/ProductItem";
import {useCart, useCartMutations} from "../../../store/Cart";

export const getProducts = async () => {
    const { data } = await axios.get('/api/products');
    return data.data;
}

const ListStoreProducts = () => {
    const [ products, setProducts ] = useState([]);
    const { itemsById, count } = useCart()
    const { removeFromCart, addToCart } = useCartMutations();

    useEffect(()=> {
        (async () => {
            const products = await getProducts();
            setProducts(products);
        })();
    }, []);

    return (
        <div className="row">
            { products.length > 0 ? (products.map((product, index) => {
                return (
                    <ProductItem product={ product } key={`product-${index}`}
                                 addToCart={addToCart}
                                 catItem={itemsById[product.id]}
                                 removeFromCart={ removeFromCart } />
                );
            })) : null }
        </div>
    );
}

export default ListStoreProducts;