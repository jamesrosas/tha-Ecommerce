import React, { useState } from 'react';
import initialState from '../initialState'

const useInitialState = () =>{
    const [state, setState] = useState(initialState);

    const addToCart = payload => {
        const random = Math.floor(Math.random() * 9999);
        const newProduct = {...payload, id: `${payload.id}${random}`} // aqui fue elcambio de variables dentro de template literals a variable normales concatenadas pro medio de un +, decidi dejarlo en string para que asi nunca cumpla la codicional renderizado de los numeros, y asi no renderize algo por suerte del num random.
        console.log(newProduct);
        
        // const isExist = state.cart.find(item => item.id === payload.id || item.id === newProduct.id)
      
        // if (isExist){
        //     setState({ 
        //     ...state
        // })
        // } else {
            setState({
                ...state,
                cart: [...state.cart, newProduct]
            })
        // }

    }

    const removeToCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter((item) => item.id !== payload.id)
        })
    }

    const addToBuyer = (payload) => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        })
    }

    const addToOrders = (payload) =>{
        setState({
            ...state,
            orders : [...state.orders, payload] 
        })
    }

    return {
        addToCart,
        removeToCart,
        state,
        setState,
        addToBuyer,
        addToOrders
    }
}

export default useInitialState;