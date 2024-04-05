import React from 'react';
import { Link } from 'react-router-dom';

//css
import '../Servicios/servicios.css';

//imagenes
import arealibre from '../assets/Imagenes Servicios/arealibre.png';
import camping from '../assets/Imagenes Servicios/camping.png';
import duchas from '../assets/Imagenes Servicios/duchas.png';
import electricidad from '../assets/Imagenes Servicios/electricidad.png';
import electrodomesticos from '../assets/Imagenes Servicios/electrodomesticos.png';
import parking from '../assets/Imagenes Servicios/parking.png';
import vaciadoaguas from '../assets/Imagenes Servicios/vaciadoaguas.png';

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

//logos redes
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import youtube from '../assets/youtube.png';

const secondIndex = () => {
    return (
        <div className='wrapper'>
            <header>
                <img id='logo' src={icon} alt="Logo de Arena Camping" />
                <h1>Arena Camping</h1>
                <nav className='headBars'>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/Servicios">Servicio</Link></li>
                        <li><Link to="/Actividades">Actividades</Link></li>
                        <li><Link to="/Entorno">Entorno</Link></li>
                        <li><Link to="/Contacto">Contacto</Link></li>
                        <li><Link to="/Precios">Precios</Link></li>
                        <li><Link to="/Localización">Localización</Link></li>
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

                    <section>
                        <h2 className='fotosg'>Galería</h2>
                        <p className='fotosg'>Descubre nuestras instalaciones</p>
                        <div className='Album'>
                            <div className='box'>
                                <img src={arealibre} alt="img1" />
                            </div>
                            <div className='box'>
                                <img src={electricidad} alt="img2" />
                            </div>
                            <div className='box'>
                                <img src={duchas} alt="img3" />
                            </div>
                            <div className='box'>
                                <img src={camping} alt="img4" />
                            </div>
                            <div className='box'>
                                <img src={electrodomesticos} alt="img5" />
                            </div>
                            <div className='box'>
                                <img src={parking} alt="img6" />
                            </div>
                            <div className='box'>
                                <img src={vaciadoaguas} alt="img7" />
                            </div>
                        </div>
                    </section>
                    <section className='redes'>
                        <div id='titleRedes'>
                            <h1>Puedes seguirnos en cualquiera de nuestras redes sociales.</h1>
                        </div>
                        <div className='lista-redes'>
                            <div className='divs'>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <img className='imagenes' src={instagram} alt="img6" />
                                </a>
                                <p className='pStyle'>Instagram</p>
                            </div>
                            <div className='divs'>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <img className='imagenes' src={twitter} alt="img7" />
                                </a>
                                <p className='pStyle'>Twitter</p>
                            </div>
                            <div className='divs'>
                                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                    <img className='imagenes' src={youtube} alt="img8" />
                                </a>
                                <p className='pStyle'>YouTube</p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

            <footer className="footer-page">
                <div className='foot'>
                    <p>© 2024 | Felipe Toledano Escudero</p>
                    <nav>
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
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