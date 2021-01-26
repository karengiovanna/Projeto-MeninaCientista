

import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Cabecalho.css';

function Cabecalho(){
    return(
        
        <header className="layout-cabecalho">
            <nav className="nav-menu">
                <ul className="menu__cabecalho">
                    <li className="menu__item"> 
                        <a href ="index.html">Inicio</a>
                    </li>
                    <li className="menu__item">
                        <a href="sobre.html">Sobre</a>
                    </li>
                    <li className="menu__item">
                        <a href="index.html">
                            <img className="menu__logo" src={Logo} alt="Logo menina-cientista"/>
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="videos.html">Videos</a>
                    </li>
                    <li className="menu__item">
                        <a href="contato.html">Contato</a>
                    </li>
                                    
                </ul>
            </nav>
        </header>
    );
   

}


export default Cabecalho; 
