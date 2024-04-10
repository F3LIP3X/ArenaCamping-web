import React from 'react';
import '../Inicio/inicio.css'
import { Link } from 'react-router-dom';

//Comando para comentar Ctrl + K + C
const footerPanel = () => {
    return (
        <div className='wrapper'>
            <header>
                {/* <img id='logo' src={icon} alt="Logo de Arena Camping" /> */}
                <h1 id='webName'>Arena Camping</h1>
                <nav className='headBars'>
                    <ul>
                        <li className='head-li'><Link to="/">Inicio</Link></li>
                        <li className='head-li'><Link to="/Servicios">Servicio</Link></li>
                        <li className='head-li'><Link to="/Actividades">Actividades</Link></li>
                        <li className='head-li'><Link to="/Entorno">Entorno</Link></li>
                        <li className='head-li'><Link to="/Contacto">Contacto</Link></li>
                        <li className='head-li'><Link to="/Precios">Precios</Link></li>
                        <li className='head-li'><Link to="/Localización">Localización</Link></li>
                    </ul>
                </nav>
            </header>
        </div >
    );
};

export default footerPanel;