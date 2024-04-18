import React from 'react';
import '../Inicio/inicio.css'
import { Link } from 'react-router-dom';

//Icon
import icon from '../assets/logo.ico';

//Comando para comentar Ctrl + K + C
const footerPanel = () => {
    return (
        <div>
            <footer className="footer-page">
                <div className='footer-container'>
                    <div className="footer-info">
                        <div className="info-table">
                            <div className="info-row">
                                <span>Empresa: </span>
                                <span>Arena Camping Granada</span>
                            </div>
                            <div className="info-row">
                                <span>Dirección: </span>
                                <span>18183 Huétor de Santillán Granda, España</span>
                            </div>
                            <div className="info-row">
                                <span>Teléfono: </span>
                                <span>666-666-666</span>
                            </div>
                            <div className="info-row">
                                <span>Email: </span>
                                <span>info@campingnaturaleza.com</span>
                            </div>
                        </div>
                    </div >
                    <div className="footer-image">
                        <img src={icon} alt="Arena Camping" />
                    </div>
                </div >
                <br />
                <p className="copyright">© 2024 | Felipe Toledano Escudero</p>
                <nav>
                    <ul>
                        <li className='foot-li'><Link to="/">Inicio</Link></li>
                        <li><a href="#about">Acerca de</a></li>
                        <li><a href="#contact">Contacto</a></li>
                        <li><a href="#work-with-us">Trabaja con nosotros</a></li>
                    </ul>
                </nav>
            </footer >
        </div >
    );
};

export default footerPanel;