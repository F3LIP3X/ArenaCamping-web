import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import '../Contacto/contacto.css';

// Icono
import icon from '../assets/logo.ico';
import SocialPanel from '../Moduls/social';
import HeaderPanel from '../Moduls/header';



const FifthIndex = () => {
    return (
        <div className='wrapper'>
            <HeaderPanel />
            <div className="main-content">
                <main className='informacion'>
                    <section>
                        <h2>Contacto</h2>
                    </section>
                    <SocialPanel />
                    <section className="formulario">
                        <h2>Si tiene alguna duda, envíanos un mensaje</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="matricula">Matrícula:</label>
                                <input type="text" id="matricula" name="matricula" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Correo Electrónico:</label>
                                <input type="email" id="email" name="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mensaje">Mensaje:</label>
                                <textarea id="mensaje" name="mensaje"></textarea>
                            </div>
                            <button type="submit">Enviar</button>
                        </form>
                    </section>

                </main>
            </div>
            
            <footer className="footer-page">
                <div className='footer-container'>
                    <div className="footer-info">
                        <h4 id='info-Footer'>Información</h4>
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
                        <li><Link to="/">Inicio</Link></li>
                        <li><a href="#about">Acerca de</a></li>
                        <li><a href="#contact">Contacto</a></li>
                        <li><a href="#work-with-us">Trabaja con nosotros</a></li>
                    </ul>
                </nav>
            </footer >
        </div>
    );
};

export default FifthIndex;
