import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Checkout from '../containers/Checkout';
import Home from '../containers/Home';
import Information from '../containers/Information';
import NotFound from '../containers/NotFound';
import Payment from '../containers/Payment';
import Success from '../containers/Success';

import '../styles/componentes/App.css';

function AppRouter() {
  return (
  <BrowserRouter>
    <Switch>
        <Route exact path='/' component={ Home}/>
        <Route exact path='/checkout' component={ Checkout}/>
        <Route exact path='/checkout/information' component={ Information}/>
        <Route exact path='/checkout/payment' component={ Payment}/>
        <Route exact path='/checkout/success' component={ Success}/>
        <Route component={ NotFound}/>
    </Switch>
  </BrowserRouter>
  )
}

export default AppRouter;