import React from "react";
import { Link } from "react-router-dom";

import "./styles.css"

function Card(props) {

    const { name, price, id, imageUrl } = props;
    const httpsImgUrl = `https://${imageUrl}`;

    return (
        <div className="card">
            <img src={httpsImgUrl} alt="" className="card__thumb" />
            
            <div className="card__desc"><Link to={`/${id}`}>{name}</Link></div>
            
            <div className="card__row">
                <div className="card__price">{price.current.text}</div>
                <button className="card__button">Buy Now</button>
            </div>
        </div>
    )
}

export default Card;