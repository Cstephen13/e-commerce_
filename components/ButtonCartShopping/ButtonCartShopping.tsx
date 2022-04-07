import React from "react";

const ButtonCartShopping = () => {
    return (
        <a type="submit" className="btn btn-link text-decoration-none">
            <i className='fas fa-cart-shopping fa-xl'/>
            <span className="position-relative top-0 start-50 translate-middle badge rounded-pill bg-danger">
                99+
                <span className="visually-hidden">unread messages</span>
              </span>
        </a>
    );
}

export default ButtonCartShopping;