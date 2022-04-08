import React from "react";

const SummarySale = ({ items }) => {

    return (<>
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
                        <td>${ product.price.toLocaleString('es-CO') }</td>
                        <td>{product.quantity}</td>
                        <td>{(product.quantity * product.price).toLocaleString('es-CO')}</td>
                    </tr>
                )
            })}
            <tr>
                <td colSpan={2} className='text-center'>
                    <b>Total a Pagar:</b>
                </td>
                <td colSpan={2}  className='text-end'>
                    <b>${ items.reduce((acum,product)=> acum + (product.quantity * product.price ), 0).toLocaleString('es-CO')}</b>
                </td>
            </tr>
            </tbody>
        </table>
    </>);
}

export default SummarySale;