import React from 'react';
import '../styles/componentes/Payment.css'


function Payment() {
  return (
  <div className="payment-container">
    <h2>Resumen del pedido</h2>
    <div>
      <button>Pagar con Paypal</button>
    </div>
  </div>
  )
}

export default Payment;