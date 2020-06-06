import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../img/Inbecc.png';
import logoG from '../../img/controlg.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="bg">
            <nav className="navbar colocarNavbar">
                <NavLink className="navbar-brand" activeClsssName="disable" to="/">
                    <img src={logoG} alt="logo ControlG" className="navbar-img"/>
                </NavLink>
                <NavLink className="navbar-brand" activeClsssName="disable" to="https://www.facebook.com/inbecc/">
                    <img src={logo} alt="logo INBECC" className="navbar-img"/>
                </NavLink>
            </nav>
            <p className="centrarTexto margenD" style={{ color: "black" }}>Aplicación Educativa</p>
        </header>
    )
}

export default Navbar