import React, { useEffect } from "react";
import product from "../product";
import response from '../response';

import Card from './card';

function HomePage() {
    const [products, setProducts] = React.useState([])

    useEffect(() => {
        // fetchProducts()
        //     .then(data =>
        //      setProducts(data))
        setProducts(response.products)
    }, [])

    return (
        <div className="container row">
            {products.map(product => {
                return <Card
                    {...product}
                    key={products.id}
                />
            })}
        </div>
    )

}

export default HomePage;