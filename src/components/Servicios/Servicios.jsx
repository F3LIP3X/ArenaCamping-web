import React from 'react';

//Componentes
import FooterPanel from '../Moduls/footer'; 
import HeaderPanel from '../Moduls/header'; 
import SocialPanel from '../Moduls/social';
import GaleryPanel2 from '../Moduls/GaleryPanel2';

//css
import '../Servicios/servicios.css';

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
                                <p className='logo'><GiPadlock /></p>
                                <p>Estacionamiento Seguro</p>
                            </div>
                            <div className="service-item">
                                <p className='logo'><FaWifi /></p>
                                <p>Wifi Gratis</p>
                            </div>
                            <div className="service-item">
                                <p className='logo'><FaShower /></p>
                                <p>Disponibilidad de Duchas</p>
                            </div>
                            <div className="service-item">
                                <p className='logo'><MdGames /></p>
                                <p>Área recreativa</p>
                            </div>
                            <div className="service-item2">
                                <p className='logo'><AiOutlineThunderbolt /></p>
                                <p>Electricidad Accesible</p>
                            </div>
                            <div className="service-item2">
                                <p className='logo'><GiWashingMachine /></p>
                                <p>Variedad de Electrodomésticos</p>
                            </div>
                            <div className="service-item2">
                                <p className='logo'><MdOutlineWaterDamage /></p>
                                <p>Llenado y vaciado aguas</p>
                            </div>
                            <div className="service-item2">
                                <p className='logo'><GiNightSleep /></p>
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
                    <GaleryPanel2 />
                    <SocialPanel />
                </main>
            </div>
            <FooterPanel />

        </div>
    );
};
export default secondIndex;