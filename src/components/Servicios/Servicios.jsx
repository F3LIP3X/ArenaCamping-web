import React from 'react';

// Components
import FooterPanel from '../Moduls/footer'; 
import HeaderPanel from '../Moduls/header'; 
import SocialPanel from '../Moduls/social';
import GaleryPanel2 from '../Moduls/GaleryPanel2';

// CSS
import '../Servicios/servicios.css';

// Icons
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
        <div>
            <HeaderPanel />
            <div className="main-content">
                <main className='informacion'>
                    <section>
                        <h2>Services</h2>
                    </section>
                    <section>
                        <h2 className='titleservicio'>Our Services</h2>
                        <hr />
                        <p className='textoinfo'>At Arena Camping in Granada, we offer our rest area for motorhomes and campers, and you can also enjoy the wide range of services we offer.</p>
                        <hr />
                        <div className='lista'>
                            <div className="service-item">
                                <p className='logo'><GiPadlock /></p>
                                <p>Secure Parking</p>
                            </div>
                            <div className="service-item">
                                <p className='logo'><FaWifi /></p>
                                <p>Free Wi-Fi</p>
                            </div>
                            <div className="service-item">
                                <p className='logo'><FaShower /></p>
                                <p>Availability of Showers</p>
                            </div>
                            <div className="service-item">
                                <p className='logo'><MdGames /></p>
                                <p>Recreational Area</p>
                            </div>
                            <div className="service-item2">
                                <p className='logo'><AiOutlineThunderbolt /></p>
                                <p>Accessible Electricity</p>
                            </div>
                            <div className="service-item2">
                                <p className='logo'><GiWashingMachine /></p>
                                <p>Variety of Appliances</p>
                            </div>
                            <div className="service-item2">
                                <p className='logo'><MdOutlineWaterDamage /></p>
                                <p>Water Filling and Emptying</p>
                            </div>
                            <div className="service-item2">
                                <p className='logo'><GiNightSleep /></p>
                                <p>Rest Area</p>
                            </div>
                        </div>
                    </section>

                    <section id="rules">
                        <h2 className='Reglas'>Rules</h2>
                        <hr />
                        <div class="Normas">
                            <div className='normasG'>
                                <p><TiTick /><b>Caravans, campers, and motorhomes are allowed.</b></p>
                                <p><TiTick /><b>Entrance and exit from 8:00 AM to 10:00 PM.</b></p>
                                <p><TiTick /><b>Vandalism is penalized.</b></p>
                            </div>
                            <div className='normasB'>
                                <p><IoIosCloseCircle /><b>No driving or noise from 11:00 PM to 8:00 AM.</b></p>
                                <p><IoIosCloseCircle /><b>No tents are allowed.</b></p>
                                <p><IoIosCloseCircle /><b>Barbecues are prohibited due to vegetation.</b></p>
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
