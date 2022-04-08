import React, {useEffect, useState} from "react";
import axios from "axios";
import ProductItem from "../ProductItem/ProductItem";
import {useCart, useCartMutations} from "../../../store/Cart";
import {Spinner} from "react-bootstrap";

export const getProducts = async () => {
    const { data } = await axios.get('/api/products');
    return data.data;
}

const ListStoreProducts = () => {
    const [ products, setProducts ] = useState([]);
    const { itemsById, count } = useCart()
    const { removeFromCart, addToCart } = useCartMutations();
    const  [ loading, setLoading ] = useState(true);

    useEffect(()=> {
        (async () => {
            const products = await getProducts();
            setProducts(products);
            setLoading(false);
        })();
    }, []);

    return (
        <div className="row">
            {!loading ? (
                <>
                    { products.length > 0 ? (products.map((product, index) => {
                        return (
                            <ProductItem product={ product } key={`product-${index}`}
                                         addToCart={addToCart}
                                         catItem={itemsById[product.id]}
                                         removeFromCart={ removeFromCart } />
                        );
                    })) : <div className='p-5 bg-light'>No hay productos para mostrar en esta tienda :(</div> }
                </>
            ): ( <Spinner className='text-center' animation="border" variant="primary" /> )}
        </div>
    );
}

export default ListStoreProducts;