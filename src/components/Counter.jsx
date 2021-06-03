import React, {useState, useRef, useContext} from 'react';
import '../styles/componentes/Checkout.css'
import AppContext from '../context/AppContext'

function Counter ({item}) {
    const [stateCount, setStateCount] = useState(1);
    const {setState, state} = useContext(AppContext)

    const handleMas = (product) => {
        setStateCount(stateCount + 1);
        const random = Math.floor(Math.random() * 9999);
        const newProduct = {...product, id: `${product.id}${random}`} // aqui fue elcambio de variables dentro de template literals a variable normales concatenadas pro medio de un +, decidi dejarlo en string para que asi nunca cumpla la codicional renderizado de los numeros, y asi no renderize algo por suerte del num random.
        console.log(newProduct);
        setState({
            ...state,
            cart: [...state.cart, newProduct]
        })
    }

    const handleMenos = (payload) => { // el tema esta en esta funcion, ya que tengo que lograr que ademas de que  de reducir el contador al hacer click en el menos tambien se reste dicho precio de caja del total.
        if(payload.id > 10){// esta condicion no esta haciendo nada por el momento, hay que modificarla hasta que elimine el id del ultimo articulo agregado.
            setState({
                ...state,
                cart: state.cart.filter(item => item.id !== payload.id)
            });
        } // TALVEZ AQUI SI FUNCIONE LA SOLUCION QUE DABA UN COMPAÑERO DE ELIMINAR POR EL INDICE ******
        // tambien esta el tema que cuando le doy eliminar al producto todavia queda el valor total, y esto es por solo estamos eliminado el id original, por eso solo se resta este, y todos los otros productos con id random no se estan eliminando, talves sea porque son strings o algo.tambien cuando salimos de checkout y volvemos el contador se ha reiniciado en 1 y no se queda en la catidad que elgimos anteriromente aunque los producos si se ven representados en el carrito, el proque del reinicio del countador es porque recordemos que solo estamos renderizando el producto con el ID en numero que es el origina, y los valores de mas en el contador equivalen a productos del mismo pero con diferente ID por esto no se estan visualinanod dichos valores.

        //LA SOLUCION MAS SENCILLA DE ESTO SERIA QUE PUDIERA OBTENER LO VALORES TOTALES DE CADA PRODUCTO Y SUMAR ESTOS EN UN TOTAL GLOBAL. DE ESTA MANERA ESTARIA MOSTRANDO EL TOTAL Y EL BOTON DE ELIMINAR ME ELIMINARIA POR COMPLETO EL PRODUCTO Y SUS VALORES INCLUIDOS LOS QUE SE ESTAN SUMANDO EN EL TOTAL GLOBAL , PORQUE YA SOLO ESTARIAMOS MANEJANDO UN SOLO ID . EL PROBLEMA DE ESTO ES QUE LA CATIDAD DE PRODUCTOS NO APARECERIA EN EL NUMERITO DEL CARRITO DE COMPRAS


        if (stateCount > 1 ){
          setStateCount(stateCount - 1);
        //   setState(state.cart.length - 1)
        }
        return stateCount;
        
    
    }

    const sumatoriaCantidad = (price) => {
        const resultPrice = price * stateCount
        return resultPrice;
    } 

    return (
        <div>
            <div className="counter-box">
                <button onClick={() => handleMenos(item)}>-</button>
                <span>{stateCount}</span>
                <button onClick={() => handleMas(item)}>+</button>
            </div>
            <div className="details-price">
                <p>${`${sumatoriaCantidad(item.price)}`}</p>
            </div>
        </div>
    )
}

export default Counter;
