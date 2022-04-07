import React from "react";
import Layout from "../components/Layouts/Layout";
import ListStoreProducts from "../components/Products/Products/ListStoreProducts";

const Home = () => {

    return (
        <Layout>
            <div className="row mt-2">
                <ListStoreProducts/>
            </div>
        </Layout>
    )
}

export default Home;