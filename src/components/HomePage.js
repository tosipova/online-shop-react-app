import React, { useEffect } from "react";

import fetchProducts from "../services/fetch-products";
import product from "../product";

import Card from './card';

function HomePage() {
    const [products, setProducts] = React.useState([])

    useEffect(() => {
        // fetchProducts()
        //     .then(data =>
        //      setProducts(data))
    }, [])  

    return (
        <div>
            {/* 
                products.map() =>  <Card product/>
            */}
            <Card product={product}/>
        </div>
    )

}

export default HomePage;