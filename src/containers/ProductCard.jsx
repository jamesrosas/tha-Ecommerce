import React from 'react';
import '../styles/componentes/ProductCard.css'

function ProductCard({info}){
    return (
        <div className="product-card_container">
            <div className="img-card">
                <img width={230} src={info.image} />
            </div>
            <div>
                <h2>{info.title}</h2>
                <p>{info.description}</p>
                <p className="price">$ {info.price}</p>
            </div>
        </div>
    )
}

export default ProductCard;