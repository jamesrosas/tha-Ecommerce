import React, { useContext } from 'react';
import '../styles/componentes/Success.css';
import AppContext from '../context/AppContext';
import Map from '../components/Map';


function Success() {
  const {state} = useContext(AppContext)
  const {buyer} = state;

  return (
  <div className="success-container">
    <div className="thanks-message_container">
      <h2>Gracias por tu compra {`${buyer[0].name}`},<br/> tu pedido ya esta en proceso</h2>
      <p className="ship-message">*Tu pedido llegara en un periodo de 3-5 dias habiles</p>
    </div>
    <div className="map-container">
      <Map/>
    </div>
    <div className="back-btn_container">
      <a href="/" className="btn-back_home">Volver al home <i class="fas fa-home"></i></a>  
    </div>
  </div>
  )
}

export default Success;

