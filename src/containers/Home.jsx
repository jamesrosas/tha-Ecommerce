import React from 'react';
import '../styles/componentes/Home.css'
import initialState from '../initialState'
import ProductsContainer from './ProductsContainer';


function Home() {
  return (
    <div className="home-container">
      <h2 className="store-title">Welcome to the best Swag ecommerce !!</h2>
      <ProductsContainer products={initialState.products}/>
    </div>
  )
}

export default Home;