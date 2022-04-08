import React, {useEffect, useState} from "react";
import Layout from "../../components/Layouts/Layout";
import {getCategories} from "../../components/Filter/Filter";
import ModalNewCategory from "../../components/Categories/ModalNewCategory";

const Categories = () => {
    const [ categories, setCategories ] = useState([]);
    const refreshCategories = async () => {
        const categories = await getCategories();
        setCategories(categories.data);
    }
    useEffect(()=> {
        (async () => {
            await refreshCategories();
        })();
    }, []);
    return (
        <div className='row'>
            <Layout showFilter={false}>
                <div className='row mt-5 mb-4'>
                    <div className="col">
                        <h3 className='text-center'>Categorías de productos</h3>
                    </div>
                </div>
                <div className='row'>
                     <div className='col'>
                         <ModalNewCategory refreshCategories={refreshCategories}/>
                     </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className='table-responsive'>
                            <table className='table table-striped'>
                                <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Acciones</th>
                                </tr>
                                </thead>
                                <tbody>
                                { categories.length > 0 ? categories.map((category, index)=> {
                                    return (
                                        <tr key={`catagory-${index}`}>
                                            <td>{category.name }</td>
                                            <td>
                                                <button className='btn btn-link text-danger'><i className='fas fa-trash'/></button>
                                                <button className='btn btn-link text-info'><i className='fas fa-pencil'/></button>
                                            </td>
                                        </tr>
                                    )
                                }) : <tr><td colSpan={2}>No hay datos para mostrar</td></tr>}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Categories;