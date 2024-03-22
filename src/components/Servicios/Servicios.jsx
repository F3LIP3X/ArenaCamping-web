import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/logo.ico';
import '../Servicios/servicios.css';
import { GiPadlock } from "react-icons/gi";
import { FaShower } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiWashingMachine } from "react-icons/gi";


const secondIndex = () => {
    return (
        <div className='wrapper'>
            <header>
                <img id='icoHeader' src={icon} alt="Logo de Arena Camping" />
                <h1 id='h1Arena'>Arena Camping</h1>
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
                <main className='informacion'>
                    <section id="home">
                        <h1 className='subtitulo'>Servicios</h1>
                    </section>
                    <section id="home">
                        <h2>Nuestros Servicios</h2>
                            <p className='textoinfo'>En Arena Camping de Granada ponemos a su disposición nuestro área 
                            de descanso para autocaravanas y camper, además podrá disfrutar de la amplia gama de servicios 
                            que disponemos.</p>
                    </section>
                <div className='Ejemplos'>
                    <section id="about" className='lista'>
                        <div className="service-item">
                            <p className='emote'><GiPadlock /></p>
                            <p>Estacionamiento Seguro</p>
                        </div>
                        <div className="service-item">
                            <p className='emote'><FaShower /></p>
                            <p>Disponibilidad de Duchas</p>
                        </div>
                        <div className="service-item">
                            <p className='emote'><AiOutlineThunderbolt /></p>
                            <p>Electricidad Accesible</p>
                        </div>
                        <div className="service-item">
                            <p className='emote'><GiWashingMachine /></p>
                            <p>Variedad de Electrodomésticos</p>
                        </div>
                        <div className="service-item">
                            <p className='emote'><GiPadlock /></p>
                            <p>Estacionamiento Seguro</p>
                        </div>
                        <div className="service-item">
                            <p className='emote'><GiPadlock /></p>
                            <p>Estacionamiento Seguro</p>
                        </div>
                        <div className="service-item">
                            <p className='emote'><GiPadlock /></p>
                            <p>Estacionamiento Seguro</p>
                        </div>
                        <div className="service-item">
                            <p className='emote'><GiPadlock /></p>
                            <p>Estacionamiento Seguro</p>
                        </div>
                    </section>
                </div>
                    <section id="prices">
                        <h2>Tabla de Precios</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Tipo de Alojamiento</th>
                                    <th>Capacidad</th>
                                    <th>Precio por Noche</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Camping Básico (Tienda de Campaña)</td>
                                    <td>2 personas</td>
                                    <td>$20</td>
                                </tr>
                                <tr>
                                    <td>Bungalow Pequeño</td>
                                    <td>4 personas</td>
                                    <td>$50</td>
                                </tr>
                                <tr>
                                    <td>Bungalow Grande</td>
                                    <td>6 personas</td>
                                    <td>$80</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section id="contact">
                        <h2>Contacto</h2>
                        <p>Para realizar reservas o para obtener más información, no dudes en contactarnos:</p>
                        <p>Teléfono: 123-456-789</p>
                        <p>Email: info@campingnaturaleza.com</p>
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

export default secondIndex;
