import React, { Component, Fragment } from 'react';
import logo from '../assets/images/logo.svg';
import { NavLink } from 'react-router-dom'; // enlaces para redirigir a otra ruta 

class Header extends Component {


    render() {

        return (

            <header id="header">
                <div className="center">

                    {/* <!--LOGO--> */}
                    <div id="logo">

                        <img src={logo} className="app-logo"></img>
                        <span id="brand">
                            <strong>Curso</strong>ReactJS
                </span>

                    </div>

                    {/* <!--MENU--> */}
                    <nav id="menu">
                        <ul>
                            <li><NavLink to="/home" activeClassName="active">Inicio</NavLink></li>
                            <li><NavLink to="/blog">Blog</NavLink></li>
                            <li><NavLink to="/formulario">Formulario</NavLink></li>
                            <li><NavLink to="/peliculas">Peliculas</NavLink></li>
                            <li><NavLink to="/fdfdfddf">Pagina 2</NavLink></li>
                        </ul>
                    </nav>

                    {/* <!--LIMPIAR FLOTADOS--> */}
                    <div className="clearfix"></div>

                </div>
            </header>
        )
    }
}

export default Header;