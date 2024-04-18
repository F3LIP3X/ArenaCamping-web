import React from 'react';
import '../Actividades/actividades.css';
import { Link } from 'react-router-dom';

// Moduls
import FooterPanel from '../Moduls/footer';
import HeaderPanel from '../Moduls/header';
import SocialPanel from '../Moduls/social';
import MoreInfoEscalada from '../Moduls/Actividades/MoreInfoEscalada';

// Imagenes
import Excursiones from '../assets/ImagenesActividades/ExcursioenesHistoricas.jpg'
import Senderismo from '../assets/ImagenesActividades/SenderismoBosque.jpg'
import BiciM from '../assets/ImagenesActividades/BiciMontaña.jpg'
import BiciC from '../assets/ImagenesActividades/BiciCarretera.jpg'
import MoreInfoCiclismo from '../Moduls/Actividades/MoreInfoCiclismo';
import MoreInfoSenderismo from '../Moduls/Actividades/MoreInfoSenderismo';
import MoreInfoTiroArco from '../Moduls/Actividades/MoreInfoTiroArco';


const AseguradoraComponent = () => {
    const handleButtonClick = () => {
        window.location.href = "#Seguros";
    }

    return (
        <div className='wrapper'>
            <HeaderPanel />
            <div className="main-content-Actividades">
                <main className='titulo'>
                    <section>
                        <h2>Actividades</h2>
                    </section>

                    <section class="tabla">
                        <div>
                            <div className='divs'>
                                <p className='pText'>Escalada</p>
                                <button className='botonActi'>Ver más</button>
                            </div>
                            <div className='divs'>
                                <p className='pText'>Cicilismo</p>
                                <button className='botonActi'>Ver Más</button>
                            </div>
                            <div className='divs'>
                                <p className='pText'>Senderismo</p>
                                <button className='botonActi'>Ver más</button>
                            </div>
                            <div className='divs'>
                                <p className='pText'>Tiro con arco</p>
                                <button className='botonActi'>Ver más</button>
                            </div>
                        </div>
                        <div id='Aseguradora'>
                            <button id="cont" onClick={handleButtonClick}>Aseguradoras</button>
                        </div>
                    </section>

                    <MoreInfoEscalada />
                    <MoreInfoCiclismo />
                    <MoreInfoSenderismo />
                    <MoreInfoTiroArco />

                    <section className='Galeria'>
                        <img src={Excursiones} alt="img1" />
                        <img src={Senderismo} alt="img2" />
                        <img src={BiciM} alt="img3" />
                        <img src={BiciC} alt="img4" />
                    </section>

                    <section className='Partes'>
                        <h2>¡No te pierdas nada!</h2>
                        <h4>Consulta aqui todas las noticias de Arena Camping Granada</h4>
                    </section>

                    <section className='Partes'>
                        <h2>Reserva ya tu plaza en Arena Camping</h2>
                        <h5 id="Plazas">Disponemos de x plazas, todas, desde X metros. ¡Contáctanos para saber más!</h5>
                        <div id='aseguradora'>
                            <button id='cont' ><Link to="/Contacto">¡Contacta!</Link></button>
                        </div>
                    </section>

                    <section>

                        <div id='Seguros'>
                            <h3 id='h3'>Seguros</h3>
                            <p >Seguro para las actividades al aire libre</p>
                            <br />
                        </div>
                        <div className='divs'>
                            <p className='pText'>Seguro Escalada</p>
                            <button className='botonActi'>Ver más</button>
                        </div>
                        <div className='divs'>
                            <p className='pText'> Seguro Cicilismo</p>
                            <button className='botonActi'>Ver más</button>
                        </div>
                        <div className='divs'>
                            <p className='pText'> Seguro Senderismo</p>
                            <button className='botonActi'>Ver más</button>
                        </div>
                        <div className='divs'>
                            <p className='pText'>Seguro Tiro con arco</p>
                            <button className='botonActi'>Ver más</button>
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
