import React, { useState } from 'react';

//Icons
import { GrServices } from "react-icons/gr";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";
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


//Components
import HeaderPanel from '../Moduls/header';
import FooterPanel from '../Moduls/footer';
import SocialPanel from '../Moduls/social';
import GaleryPanel2 from '../Moduls/GaleryPanel2';

//CSS
import '../Servicios/servicios.css';

const SecondIndex = () => {
    const [faqOpen, setFaqOpen] = useState(false);
    const [icon, setIcon] = useState(<AiFillCaretRight className="icon" />);

    const toggleFaq = () => {
        setFaqOpen(!faqOpen);
        setIcon(faqOpen ? <AiFillCaretRight className="icon" /> : <AiFillCaretDown className="icon" />);
    };

    return (
        <div>
            <HeaderPanel />
            <div className="main-content">
                <main className='informacion'>
                    <section>
                        <div className="icon-text-container">
                            <h2 className="services-h2"><GrServices className="icon" /> Services</h2>
                        </div>
                    </section>

                    <section>
                        <div className={`faq ${faqOpen ? 'open' : ''}`}>
                            <div className="question" onClick={toggleFaq}>
                                <div className="icon-text-container">
                                    <h2 className="services-h2">{icon} Our Services {!faqOpen && <span className="pulsar-aqui">(Click here)</span>}</h2>
                                </div>
                            </div>

                            <div className="answer">
                                <p className='textoinfo'>At Arena Camping in Granada, we offer our rest area for motorhomes and campers, and you can also enjoy the wide range of services we offer.</p>

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
                            </div>
                        </div>
                    </section>

                    <section id="rules">
                        <div className="icon-text-container">
                            <h2 className="services-h2"><AiFillCaretRight className="icon" />Rules</h2>
                        </div>
                        <hr />
                        <div className="Normas">
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

export default SecondIndex;
