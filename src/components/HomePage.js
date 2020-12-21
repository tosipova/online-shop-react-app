import React, { useEffect } from "react";
import response from '../mock/response';

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
                    key={product.id}
                    
                />
            })}
        </div>
    )

}

export default HomePage;