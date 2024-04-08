import React from 'react';
import { Link } from 'react-router-dom';

//Componentes
import FooterPanel from '../Inicio/footer'; 
import HeaderPanel from '../Inicio/header'; 
import SocialPanel from '../Inicio/social';

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

//Icon
import icon from '../assets/logo.ico';

//icons
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
            <HeaderPanel />
            <div className="main-content">
                <main className='informacion'>
                    <section id="home">
                        <h1>Servicios</h1>
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
                    <SocialPanel />
                </main>
            </div>
            <FooterPanel />

        </div>
    );
};
export default secondIndex;