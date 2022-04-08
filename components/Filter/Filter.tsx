import React, { useEffect, useState } from "react";
import axios from "axios";
export const getCategories = async () =>{
    const { data } = await axios.get('/api/categories');
    return data;
}
const Filter = () => {
    const [ categories, setCategories ] = useState([])
    useEffect(()=>{
        (async () =>{
            const dataCategories = await getCategories();
            setCategories(dataCategories.data)
        })();
    }, []);

    return (
        <>
            <div className="card mt-5">
                <div className="card-body">
                    <h5 className="card-title">Filtros</h5>
                    <select className="form-select" aria-label="Default select example">
                        <option/>
                        {categories.map((element, index)=> (
                            <option key={`categorie-${index}`} value={element.id}>{element.name}</option>
                        ))}
                    </select>

                    <label htmlFor="customRange1" className="form-label">Precios</label>
                    <input type="range" className="form-range" id="customRange1"/>
                </div>
            </div>
        </>
    );
}

export default Filter;