import React from "react";
import { Link } from "react-router-dom";



function BucketCard(props) {

    const { name, price, id, media, onRemove } = props;
    const httpsImgUrl = `https://${media.images[0].url}`;


    return (
        <div className="card">
            <Link to={`/product/${id}`}>
                <img src={httpsImgUrl} alt="" className="card__thumb" />
            </Link>

            <div className="card__desc"><Link to={`/product/${id}`}>{name}</Link></div>

            <div className="card__row">
                <div className="card__price">{price.current.text}</div>
                <button className="card__button" onClick={onRemove}>remove</button>
            </div>
        </div>
    )
}

export default BucketCard;