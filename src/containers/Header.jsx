import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/componentes/Header.css'

function Header() {
    const {state} = useContext(AppContext);
    const { cart } = state;
    return(
        <div className="tha-header">
            <Link to="/">
                <h2 className="header-title">Black Sheep</h2>
            </Link>
            <nav className="header-nav">
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/checkout"><li><i className="fas fa-shopping-bag" title="Checkout"></i></li>
                    {cart.length > 0 && (
                        <div className="cart-alert">
                          {cart.length}
                        </div>
                    )}
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header;