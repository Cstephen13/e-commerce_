import React from "react";


const ListStoreProducts = () => {
    const card = () => {
        let cards = []
        for (let i = 0; i < 10; i++){
            cards.push((
                <div className="col-4">
                    <div className="card mb-3" >
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                            <button className="btn btn-link text-decoration-none float-right">
                                <i className="fas fa-cart-plus"/>
                            </button>
                        </div>
                        <div className="card-footer">
                            <h6 >dsndkjnds</h6>

                        </div>
                    </div>
                </div>
            ))
        }
        return cards
    }
    return (
        <div className="row">
            { card() }
        </div>
    );
}

export default ListStoreProducts;