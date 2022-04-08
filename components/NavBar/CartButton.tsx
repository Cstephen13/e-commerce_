import React from "react";
import Link from "next/link";
type CartButtonProps = {
    cartCount: number
}
export const BadgeCart = ({ number }: any ) => {
    if (!number) {
        return null
    }
    if (number > 9) {
        return (
            <BadgeCart number={'9+'}/>
        )
    }
    return (
        <span className="position-relative top-0 start-50 translate-middle badge rounded-pill bg-danger">
             { number }
        </span>
    );
}
const CartButton = ({ cartCount }: CartButtonProps ) => {
    return (
        <Link href={"/cart"}>
            <a type="submit" className="btn btn-link text-decoration-none">
                <i className='fas fa-cart-shopping fa-xl'/>
                <BadgeCart number={ cartCount }/>
            </a>
        </Link>
    );
}

export default CartButton;