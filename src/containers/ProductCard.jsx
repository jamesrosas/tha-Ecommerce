import React from 'react';
import '../styles/componentes/ProductCard.css'

function ProductCard({product, handleClick}){
    return (
        <div className="product-card_container">
            <div className="img-card">
                <img width={230} src={product.image} />
            </div>
            <div>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p className="price">$ {product.price}</p>
            </div>
            <div>
                <button className="btn-buy" onClick={() => handleClick(product)}>+ Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ProductCard;