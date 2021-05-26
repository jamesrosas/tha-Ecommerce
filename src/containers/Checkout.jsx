import React from 'react';
import '../styles/componentes/Checkout.css'
import initialState from '../initialState'
import { Link } from 'react-router-dom';

function Checkout() {
  return (
  <div className="checkout-container">
    <h2 className="checkout-title">Products List</h2><br/>
    <div className="boxes-container">
      <div className="product-details">
        <div className="details-img">
          <img width={100} src={initialState.products[0].image}/>
        </div>
        <div className="details-price">
          <p>$ 10</p>
        </div>
        <div className="details-delete">
          <button className="checkout-buttons" title="Eliminar"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
      <div className="total-products">
        <div className="total-box">
          <h2>Total</h2>
          <p>$ 10</p>
        </div>
        <div className="btn-next">
          <Link to="/checkout/information">
            <button className="checkout-buttons">Continuar compra  <i class="fas fa-arrow-circle-right"></i></button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Checkout;