import Link from "next/link";
import React from "react";
import ButtonCartShopping from "../ButtonCartShopping/ButtonCartShopping";
const CustomNavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link href={"/"}>
                    <a className="navbar-brand"><b>EC</b></a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href={"/products"}>
                                <a className="nav-link" aria-current="page">Productos</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={"/categories"}>
                                <a className="nav-link" aria-current="page">Categorías</a>
                            </Link>
                        </li>
                    </ul>
                    <ButtonCartShopping />
                    <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                </div>
            </div>
        </nav>
    )
}

export default CustomNavBar;