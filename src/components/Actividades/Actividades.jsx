import React from 'react';
import '../Actividades/actividades.css';
import icon from '../assets/logo.ico';
import { Link } from 'react-router-dom';


const actividades = () => {
    return (
        <div className='wrapper'>
            <header>
                <img id='icoHeader' src={icon} alt="Logo de Arena Camping" />
                <h1 id=''>Arena Camping</h1>
                <nav className='headBars'>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/Servicios">Servicio</Link></li>
                        <li><Link to="/Actividades">Actividades</Link></li>
                        <li><Link to="/page2#environment">Entorno</Link></li>
                        <li><Link to="/page2#contact">Contacto</Link></li>
                        <li><Link to="/page2#prices">Precios</Link></li>
                        <li><Link to="/page2#location">Localización</Link></li>
                    </ul>
                </nav>
            </header>
            <div className="main-content">
                <main className='titulo'>
                    <section id="home">
                        <h1>Actividades</h1>

                    </section>

                    <section id="actividad" class="tabla">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Camping Básico (Tienda de Campaña)</td>
                                    <button className='boton'>VER MÁS</button>

                                </tr>
                                <tr>
                                    <td>Bungalow Pequeño</td>
                                    <button className='boton'>VER MÁS</button>

                                </tr>
                                <tr>
                                    <td>Bungalow Grande</td>
                                    <button className='boton'>VER MÁS</button>

                                </tr>
                            </tbody>
                        </table>
                    </section>

                    
                </main>
            </div>

            <footer className="footer-page">
                <div className='foot'>
                    <p>© 2024 | Felipe Toledano Escudero</p>
                    <nav>
                        <ul>
                            <li><a href="#home">Inicio</a></li>
                            <li><a href="#about">Acerca de</a></li>
                            <li><a href="#contact">Contacto</a></li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default actividades;
