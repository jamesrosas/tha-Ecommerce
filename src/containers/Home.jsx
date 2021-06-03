import React from 'react';
import '../styles/componentes/Home.css'
import ProductsContainer from './ProductsContainer';


function Home() {
  return (
    <div className="home-container">
      <h2 className="store-title">Welcome to the best Swag ecommerce !!</h2>
      <ProductsContainer />
    </div>
  )
}

export default Home;