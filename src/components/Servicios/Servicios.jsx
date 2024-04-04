import React from 'react';
import { Link } from 'react-router-dom';

//css
import '../Servicios/servicios.css';

//icons
import icon from '../assets/logo.ico';
import { GiPadlock } from "react-icons/gi";
import { FaShower } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiWashingMachine } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";
import { GiNightSleep } from "react-icons/gi";
import { MdOutlineWaterDamage } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { MdGames } from "react-icons/md";


const secondIndex = () => {
    return (
        <div className='wrapper'>
            <header>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
                        <h2 className='titleservicio'>Nuestros Servicios</h2>
                            <hr />
                        <p className='textoinfo'>En Arena Camping de Granada ponemos a su disposición nuestro área
                            de descanso para autocaravanas y camper, además podrá disfrutar de la amplia gama de servicios
                            que disponemos.</p>
                            <hr />
                        <div className='lista'>
                            <div className="service-item">
                                <p className='candadoe'><GiPadlock /></p>
                                <p>Estacionamiento Seguro</p>
                            </div>
                            <div className="service-item">
                                <p className='wifie'><FaWifi /></p>
                                <p>Wifi Gratis</p>
                            </div>
                            <div className="service-item">
                                <p className='duchae'><FaShower /></p>
                                <p>Disponibilidad de Duchas</p>
                            </div>
                            <div className="service-item">
                                <p className='areae'><MdGames /></p>
                                <p>Área recreativa</p>
                            </div>
                            <div className="service-item2">
                                <p className='rayoe'><AiOutlineThunderbolt /></p>
                                <p>Electricidad Accesible</p>
                            </div>
                            <div className="service-item2">
                                <p className='maquinae'><GiWashingMachine /></p>
                                <p>Variedad de Electrodomésticos</p>
                            </div>
                            <div className="service-item2">
                                <p className='aguae'><MdOutlineWaterDamage /></p>
                                <p>Llenado y vaciado aguas</p>
                            </div>
                            <div className="service-item2">
                                <p className='descansoe'><GiNightSleep /></p>
                                <p>Área de Descanso</p>
                            </div>
                        </div>
                    </section>

                    <section id="rules">
                        <h2 className='Reglas'>Normas</h2>
                        <hr />
                        <div class="Normas">
                            <div className='normasG'>
                                <p><TiTick /><b>Se permiten caravanas, camper y autocaravanas.</b></p>
                                <p><TiTick /><b>Entrada y salida de 8:00H a 22:00H.</b></p>
                                <p><TiTick /><b>Vandalismo sancionado.</b></p>
                            </div>
                            <div className='normasB'>
                            <p><IoIosCloseCircle /><b> No se puyede circular ni hacer ruido desde las 23:00H hasta las 8:00H.</b></p>
                            <p><IoIosCloseCircle /><b> No se permiten tiendas de campaña.</b></p>
                            <p><IoIosCloseCircle /><b> Debido a la vegetación están prohibidas las barbacoas.</b></p>
                            </div>
                        </div>
                    </section>

                    <section id="galeria">
                        <h2 className='fotosg'>Galería</h2>
                        <p className='fotosg'>Descubre nuestras instalaciones</p>
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