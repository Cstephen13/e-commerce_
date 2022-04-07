import React from "react";
import {Col, Container, Navbar, Row} from "react-bootstrap";
import CustomNavBar from "../NavBar/CustomNavBar";
import Footer from "../Footer/Footer";
import Filter from "../Filter/Filter";


type LayoutProps = {
    children?: React.ReactNode,
    showFilter?:boolean
}
const Layout = ({ children, showFilter = true} : LayoutProps) => {
    return (
        <>
            <CustomNavBar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2 col-md-2 col-lg-2 col-xs-2">
                        {showFilter && <Filter/>}
                    </div>
                    <div className="col-sm-8 col-md-8 col-lg-8 col-xs-8">
                        { children }
                    </div>
                    <div className="col-sm-2 col-md-2 col-lg-2 col-xs-2">
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Layout;