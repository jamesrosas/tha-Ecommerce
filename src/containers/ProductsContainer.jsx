import React from 'react';
import ProductCard from './ProductCard';
import '../styles/componentes/ProductsContainer.css'

function ProductsContainer({products}) {
    return(
        <div className="products-list">
            {products.map(item =>{
            return(
                <li key={item.id}>
                    <ProductCard info={item}/>
                </li>
            )
            })}
        </div>
    )
}

export default ProductsContainer;