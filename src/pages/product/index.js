import React from "react";
import { useHistory } from "react-router-dom";
import singleProduct from "../../mock/single-product";
import BucketContext from "../bucket/context/bucket-context";

import './styles.css';


function ProductPage() {
    const {add} = React.useContext(BucketContext)
    const [size, setSize] = React.useState("")
 
    // useEffect(() => {
    //     ProductService.fetchProduct()
    //         .then(data => console.log(data))
    // }, [])
    const history = useHistory()

    const onSelectChange = (event) => {
        setSize(event.target.value)
       
    }

    const onAddToCart = () => {
        if (size) {
          add({size,...singleProduct})
          history.push("/checkout")
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="product__title">{singleProduct.name}</div>
                    <div className="product__description" dangerouslySetInnerHTML={{ __html: singleProduct.description }} />
                    <div className="product__meta">
                        <div>Gender: <span>{singleProduct.gender}</span> </div>
                        <div>Product Code: <span>{singleProduct.productCode}</span> </div>
                        <div>Brand: <span>{singleProduct.brand.name}</span> </div>
                    </div>
                    <div className="product__order">
                        <div className="product__price">{singleProduct.price.current.value} USD</div>

                        <div>
                            <select onChange={onSelectChange} value={size}>
                                <option value="">Size</option>
                                {singleProduct.variants.map(variant => {
                                    if (variant.isAvailable) {
                                        return <option key={variant.brandSize} value={variant.brandSize}>{variant.brandSize}</option>
                                    }

                                    return null
                                })}
                            </select>

                            <button className="button" onClick={onAddToCart}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3332 8H2.6665" stroke="#92C064" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel" />
                                    <path d="M8 13.3333V2.66663" stroke="#92C064" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel" />
                                </svg>
                                add to card
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="product__thumbnails">
                        {singleProduct.media.images.map(image => {
                            return <img key={image.url} src={`https://${image.url}`} alt="" />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductPage;