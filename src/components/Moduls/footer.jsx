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
                                <span>Company: </span>
                                <span>Arena Camping Granada</span>
                            </div>
                            <div className="info-row">
                                <span>Address: </span>
                                <span>18183 Huétor de Santillán Granda, España</span>
                            </div>
                            <div className="info-row">
                                <span>Phone: </span>
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

                <nav>
                    <ul>
                        <li className='foot-li'><Link to="/">Start</Link></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#work-with-us">Work with us</a></li>
                    </ul>
                </nav>
                <p className="copyright">© 2024 | Felipe Toledano Escudero</p>
            </footer >
        </div >
    );
};

export default footerPanel;