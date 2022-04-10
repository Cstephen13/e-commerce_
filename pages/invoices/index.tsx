import React, {useEffect, useState} from "react";
import Layout from "../../components/Layouts/Layout";
import {Invoice} from "../../models/model";
import axios from "axios";

const RowInvoice = ( { invoice }: { invoice: Invoice } ) => {
    return (
      <tr>
          <td>{invoice.number_invoice}</td>
          <td>{invoice.user}</td>
          <td>${invoice.total_sale.toLocaleString('es-CO')}</td>
          <td>${invoice.payment.toLocaleString('es-CO')}</td>
          <td>{new Date(invoice.payment_date).toDateString()}</td>
          <td/>
      </tr>
    );
}
const getInvoices = async () => {
    const { data } = await axios.get('/api/invoices');
    return data.data;
}
const Invoices = () => {
    const [ invoices, setInvoices ] = useState<Invoice[]>([]);
    useEffect(() => {
        (async () => {
            const responseInvoices = await getInvoices();
            setInvoices(responseInvoices);
        })();
    }, []);
    return (
        <Layout showFilter={false}>
            <div className='row mt-5 mb-4'>
                <div className="col">
                    <h3 className='text-center'>Compras Realizadas</h3>
                </div>
            </div>
            <div className='row'>
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <div className='table-responsive'>
                                <table className='table table-striped'>
                                    <thead>
                                    <tr>
                                        <th>No.Factura</th>
                                        <th>Comprador</th>
                                        <th>Total Venta</th>
                                        <th>Pago recibido</th>
                                        <th>Fecha de Compra</th>
                                        <th>Acciones</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    { invoices.length > 0 ? invoices.map((invoice, index)=> {
                                        return (
                                            <RowInvoice invoice={ invoice } />
                                        )
                                    }) : <tr><td colSpan={6}>No hay datos para mostrar</td></tr>}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Invoices;