import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Checkout from '../containers/Checkout';
import Home from '../containers/Home';
import Information from '../containers/Information';
import NotFound from '../containers/NotFound';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import Layout from '../containers/Layout'
import AppContext from '../context/AppContext'

import '../styles/componentes/App.css';
import useInitialState from '../customHooks/useInitialState';


function AppRouter() {
  const initialState = useInitialState();
  return (
  <AppContext.Provider value={initialState}>
    <BrowserRouter>
      <Layout>
        <Switch>
            <Route exact path='/' component={ Home}/>
            <Route exact path='/checkout' component={ Checkout}/>
            <Route exact path='/checkout/information' component={ Information}/>
            <Route exact path='/checkout/payment' component={ Payment}/>
            <Route exact path='/checkout/success' component={ Success}/>
            <Route component={ NotFound}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  </AppContext.Provider>
  )
}

export default AppRouter;