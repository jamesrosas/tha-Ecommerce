import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/componentes/Header.css'

function Header() {
    return(
        <div className="tha-header">
            <Link to="/">
                <h2 className="header-title">Tha Ecommerce</h2>
            </Link>
            <nav className="header-nav">
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/checkout"><li>Checkout</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header;