import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/componentes/Payment.css';
import { PayPalButton} from 'react-paypal-button-v2';


function Payment({history}) {
  const {state, addToOrders} = useContext(AppContext);
  const {cart, buyer} = state;

  const paypalOptions = {
    clientId: 'AUK-zWlaxHLxi1Eug4Nv3yze1HuV1ftOv4iNyB67_UAkdGhm7q2g7-0s3AawBQ2D_ffVYk5smbkBHPiB',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {   
      layout:  'vertical',
      color:   'silver',
      shape:   'pill',
      label:   'pay'
  }

  const handlePaymentSuccess = (data) => {
    console.log(data);
    
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addToOrders(newOrder);
      history.push('/checkout/success')
    }
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
  <div className="payment-container">
    <h2>Resumen del pedido</h2>
    <div>
      {cart.map(item => {
        return (
        <div className="payment-list">
          <p>{item.title}........</p>
          <span>$ {item.price}</span>
        </div>
        )
      })}
      <p><strong>Total:</strong> {`$ ${handleSumTotal()}`}</p>
    </div>
    <div className="paypal-btn_container">
      <PayPalButton paypalOptions={paypalOptions}
            style={buttonStyles}
            amount={handleSumTotal()}
            onSuccess={data => handlePaymentSuccess(data)}
            onError={error => console.log(error)}
            onCancel={data => console.log(data)}/>
    </div>
  </div>
  )
}

export default Payment;