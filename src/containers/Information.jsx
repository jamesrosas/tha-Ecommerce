import React, {useRef, useContext} from 'react';
import '../styles/componentes/Information.css'
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';


function Information() {
  const {state, addToBuyer} = useContext(AppContext);
  const {cart} = state;
  const form = useRef(null);
  

  const handleSubmit = () =>{
    const formData = new FormData(form.current)
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'region': formData.get('region'),
      'cp': formData.get('postal'),
      'phone': formData.get('number'),
    }

    addToBuyer(buyer)
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
     // porque? que significa acccumulator, cuando lo estoy definiendo?  hay que averiguar mas sobre el uso del metodo reduce()
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <div className="information-container">
      <h1>Tu Informacion</h1>
      <div className="information-boxes">
        <div className="form-box">
          <h2>Informacion de Envio</h2>
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="email" placeholder="Correo Electronico" name="email" />
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
              <button onClick={handleSubmit}>Pagar</button>
            </Link>
          </div>
        </div>
        <div className="pedido-box">
          <h2>Pedido</h2>
          <p>No. Productos: {cart.length}</p>
          {cart.map(item =>{
            return (
              <div className="pedido-table">
                  <img width={80} src={item.image}/>
                  <p>{item.title}</p>
                  <p>$ {item.price}</p>
              </div>
            )
          })}
          <div className="total-container">
            <p>Total: {`$ ${handleSumTotal()}`}</p>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Information;