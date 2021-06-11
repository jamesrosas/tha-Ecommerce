import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import '../styles/componentes/ProductsContainer.css'
import AppContext from '../context/AppContext';

function ProductsContainer() {
    const { state, addToCart}= useContext(AppContext);
    const {products} = state;
    
    const handleClick = (product) =>{
        addToCart(product)
    }

    if (products.length === 0){
        return (
            <p>LOaaaading.....</p>
        )
    }
    return(
        <div className="products-list">
            {products.map(item =>{
            return(
                <li key={item.id}>
                    <ProductCard product={item} handleClick={handleClick}/>
                </li>
            )
            })}
        </div>
    )
}

export default ProductsContainer;