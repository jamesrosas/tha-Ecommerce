import React from 'react';
import '../styles/componentes/Layout.css'
import Header from './Header'
import Footer from './Footer'

function Layout({children}) {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>

    )
}

export default Layout;