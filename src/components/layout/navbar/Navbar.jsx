import React from 'react'
import Cartwidget from '../../common/cartwidget/Cartwidget'
import "./navbar.css";
import { Link } from "react-router";

function Navbar() {
    return (
        <div className='navbar'>
            <h1>
                <Link to="/">
                    Mi tienda Autos
                </Link>
                </h1>
            <ul>
                <li>
                    <Link to="/category/suv">SUV</Link>
                </li>
                <li>
                    <Link to="/category/hach">Hach</Link>
                </li>
            </ul>
                <Link to="/cart">
                    <Cartwidget />
                </Link>
        </div>
    )
}

export default Navbar
