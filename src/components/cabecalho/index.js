

import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Cabecalho.css';

function Cabecalho(){
    return(
      
        <nav>
            
            <ul className="cabecalho-menu">
                <li className="menu__item">Inicio</li>
                <li className="menu__item">Sobre</li>
                <li className="menu__item">
                    <img className="menu__logo" src={Logo} alt="Logo menina-cientista"/>
                </li>
                <li className="menu__item">Videos</li>
                <li className="menu__item">Contato</li>
                                
            </ul>
        </nav>
  
    );
   

}


export default Cabecalho; 
