import React from 'react';
import '../Actividades/actividades.css';
import { Link } from 'react-router-dom';

// Modules
import FooterPanel from '../Moduls/footer';
import HeaderPanel from '../Moduls/header';

//Icons
import { BsActivity } from "react-icons/bs";
import { MdCallMissed } from "react-icons/md";
import { CiBookmarkPlus } from "react-icons/ci";
import { MdSecurity } from "react-icons/md";


// Components
import SocialPanel from '../Moduls/social';
import MoreInfoEscalada from '../Moduls/Componentes Actividades/MoreInfoEscalada';
import MoreInfoCiclismo from '../Moduls/Componentes Actividades/MoreInfoCiclismo';
import MoreInfoSenderismo from '../Moduls/Componentes Actividades/MoreInfoSenderismo';
import MoreInfoTiroArco from '../Moduls/Componentes Actividades/MoreInfoTiroArco';

const AseguradoraComponent = () => {
    const handleButtonClick = () => {
        window.location.href = "#Seguros";
    }

    return (
        <div>
            <HeaderPanel />
            <div className="main-content-Actividades">
                <main className='titulo'>
                    <section>
                        <div class="icon-text-container">
                            <h2 class="activities"><BsActivity class="icon" /> Activities</h2>
                        </div>
                    </section>

                    <section class="tabla">
                        <div>
                            <div className='divs'>
                                <p className='pText'>Climbing</p>
                                <button className='botonActi'>View more</button>
                            </div>
                            <div className='divs'>
                                <p className='pText'>Cycling</p>
                                <button className='botonActi'>View More</button>
                            </div>
                            <div className='divs'>
                                <p className='pText'>Hiking</p>
                                <button className='botonActi'>View more</button>
                            </div>
                            <div className='divs'>
                                <p className='pText'>Archery</p>
                                <button className='botonActi'>View more</button>
                            </div>
                        </div>
                        <div id='Aseguradora'>
                            <button id="cont" onClick={handleButtonClick}>Insurance</button>
                        </div>
                    </section>

                    <MoreInfoEscalada />
                    <MoreInfoCiclismo />
                    <MoreInfoSenderismo />
                    <MoreInfoTiroArco />

                    <section className='Partes'>
                        <div className='icon-text-container'>
                            <h2 className='icon-text'><MdCallMissed className="icon"/>Don't miss out!</h2>
                        </div>
                        <h4>Check out all the news from Arena Camping Granada here</h4>
                    </section>

                    <section className='Partes'>
                        <div className='icon-text-container'>
                            <h2 className='icon-text'><CiBookmarkPlus class="icon"/>Book your spot at Arena Camping now</h2>
                        </div>
                        <h5 id="Plazas">We have X spots, all from X meters. Contact us to learn more!</h5>
                        <div id='aseguradora'>
                            <button id='cont' ><Link to="/Contacto">Contact!</Link></button>
                        </div>
                    </section>

                    <section>
                        <div id='Seguros'>
                            <div className='icon-text-container'>
                                <h2 className='icon-text'><MdSecurity className='icon'/>Insurance</h2>
                            </div>
                            <p>Insurance for outdoor activities</p>
                            <br />
                        </div>
                        <div className='divs'>
                            <p className='pText'>Climbing Insurance</p>
                            <button className='botonActi'>View more</button>
                        </div>
                        <div className='divs'>
                            <p className='pText'> Cycling Insurance</p>
                            <button className='botonActi'>View more</button>
                        </div>
                        <div className='divs'>
                            <p className='pText'> Hiking Insurance</p>
                            <button className='botonActi'>View more</button>
                        </div>
                        <div className='divs'>
                            <p className='pText'>Archery Insurance</p>
                            <button className='botonActi'>View more</button>
                        </div>
                    </section>
                    <SocialPanel />
                </main>
            </div>
            <FooterPanel />
        </div >
    );
};

export default AseguradoraComponent;
