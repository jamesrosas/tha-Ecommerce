import React from 'react';
import '../styles/componentes/Information.css'
import initialState from '../initialState'
import { Link } from 'react-router-dom';


function Information() {
  return (
    <div className="information-container">
      <h1>Tu Informacion</h1>
      <div className="information-boxes">
        <div className="form-box">
          <h2>Informacion de contacto</h2>
          <form>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="email" placeholder="Correo Electronico" name="name" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Region" name="region" />
            <input type="text" placeholder="codigo postal" name="postal" />
            <input type="text" placeholder="Telefono" name="number" />            
          </form>
          <div className="buttons-container">
            <Link to="/checkout">
              <button>Regresar</button>            
            </Link>
            <Link to="/checkout/payment">
              <button>Pagar</button>
            </Link>
          </div>
        </div>
        <div className="pedido-box">
          <h2>Pedido</h2>
          <div className="pedido-table">
              <img width={80} src={initialState.products[0].image}/>
              <p>$ 10</p>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Information;