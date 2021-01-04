import React from "react";
import singleProduct from "../../mock/single-product";
import './styles.css';


function ProductPage() {

    // name
    // description
    /*
    [
        gender        isNoSize
        productCode   isOneSize
        brand         isInStock
    ]

    Simillar
        variants
    */

    // media.images

    // price buy it


    // useEffect(() => {
    //     ProductService.fetchProduct()
    //         .then(data => console.log(data))
    // }, [])


    return (
        <div className="container">
            <div className="product__title">{singleProduct.name}</div>
            <div className="product__description" dangerouslySetInnerHTML={{ __html: singleProduct.description }} />
            <div className="product__meta">
                <div>Gender: <span>{singleProduct.gender}</span> </div>
                <div>Product Code: <span>{singleProduct.productCode}</span> </div>
                <div>Brand: <span>{singleProduct.brand.name}</span> </div>
            </div>
            <div className="product__order">
                <div className="product__price">{singleProduct.price.current.value} USD</div>

                {singleProduct.variants.map(variant => {
                    if (variant.isAvailable) {
                        return <span>{variant.brandSize}</span>
                    }

                    return null
                })}
                <div>
                    <button className="button">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3332 8H2.6665" stroke="#92C064" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel" />
                            <path d="M8 13.3333V2.66663" stroke="#92C064" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel" />
                        </svg>
                        add to card
                     </button>
                </div>
            </div>
            <div className="product__thumbnails">
                {singleProduct.media.images.map(image => {
                    return <img src={`https://${image.url}`} alt="" />
                })}
            </div>
        </div>
    )
}
export default ProductPage;