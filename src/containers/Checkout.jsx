import React, {useContext, useRef, useState} from 'react';
import '../styles/componentes/Checkout.css'
import initialState from '../initialState'
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Counter from '../components/counter';

function Checkout() {
  const {state, removeToCart, setState} = useContext(AppContext)
  const {cart} = state;

  const handleRemove = (product) => {
    removeToCart(product)
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
     // porque? que significa acccumulator, cuando lo estoy definiendo?  hay que averiguar mas sobre el uso del metodo reduce()
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
  <div className="checkout-container">
    <h2 className="checkout-title">Products List</h2><br/>
    <div className="boxes-container">
      {cart.length === 0 && (
        <h3>Aun no agregas ningun articulo al carrito <i class="far fa-frown-open"></i></h3>
      )}
      <div className="details-cards_container">       
        {cart.map(item => {
          // const isExist = cart.find(item => item.cartId === '1')
          // if (item.id < 10){
            return (          
              <div className="product-details">
                  <div>
                    <p className="name-text">{item.title}</p>
                  </div>
                  <div className="details-img">
                    <img width={100} src={item.image}/>
                  </div>
                  <div>
                    <p className="price-text"> $ {item.price}</p>
                  </div>
                  <div className="details-delete">
                    <button className="checkout-buttons" onClick={() => handleRemove(item)} title="Eliminar"><i class="fas fa-trash-alt"></i></button>
                  </div>
              </div>
            )          
          // }
        }
        )}
      </div>
      <div className="total-products">
        <div className="total-box">
          <h2>Total</h2>
            <p>{`$ ${handleSumTotal()}`}</p>
        </div>
        <div className="btn-next">
          {cart.length > 0 && (
            <Link to="/checkout/information">
              <button className="checkout-buttons">Continuar compra  <i class="fas fa-arrow-circle-right"></i></button>
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Checkout;