import React from 'react'
import Cartwidget from '../../common/cartwidget/Cartwidget'
import "./navbar.css";

function Navbar() {
    return (
        <div className='navbar'>
            <h1>Mi tienda App</h1>
            <ul>
                <li>categoria a</li>
                <li>categoria b</li>
                <li>categoria c</li>
            </ul>

            <Cartwidget />
        </div>
    )
}

export default Navbar
