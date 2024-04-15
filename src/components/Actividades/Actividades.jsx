import React from 'react';
import '../Actividades/actividades.css';
import { Link } from 'react-router-dom';

//Moduls
import FooterPanel from '../Moduls/footer';
import HeaderPanel from '../Moduls/header';
import SocialPanel from '../Moduls/social';

//Imagenes
import Excursiones from '../assets/ImagenesActividades/ExcursioenesHistoricas.jpg'
import Senderismo from '../assets/ImagenesActividades/SenderismoBosque.jpg'
import BiciM from '../assets/ImagenesActividades/BiciMontaña.jpg'
import BiciC from '../assets/ImagenesActividades/BiciCarretera.jpg'

const actividades = () => {
    return (
        <div className='wrapper'>
            <HeaderPanel />
            <div className="main-content">
                <main className='titulo'>
                    <section>
                        <h1>Actividades</h1>
                    </section>



                    <section class="tabla">
                        <div>
                            <div>
                                <button className='boton'>VER MÁS</button>
                                <p className='pText'>Escalada</p>
                            </div>
                            <div>
                                <button className='boton'>VER MÁS</button>
                                <p className='pText'>Cicilismo</p>
                            </div>
                            <div>
                                <button className='boton'>VER MÁS</button>
                                <p className='pText'>Senderismo</p>
                            </div>
                            <div>
                                <button className='boton'>VER MÁS</button>
                                <p className='pText'>Tiro con arco</p>
                            </div>
                        </div>
                        <div >
                            <button className="btn btn-outline btn-success">Aseguradoras</button>
                        </div>
                    </section>
                    
                    <section className='Galeria'>
                        <img src={Excursiones} alt="img1" />
                        <img src={Senderismo} alt="img2" />
                        <img src={BiciM} alt="img3" />
                        <img src={BiciC} alt="img4" />
                    </section>

                    <section className='Partes'>
                        <h1>¡No te pierdas nada!</h1>
                        <h4>Consulta aqui todas las noticias de Arena Camping Granada</h4>
                    </section>

                    <section className='Partes'>
                        <h1 >Reserva ya tu plaza en Arena Camping</h1>
                        <h5 >Disponemos de x plazas, todas, desde X metros. ¡Contáctanos para saber más!</h5>
                        <div id='aseguradora'>
                            <button id='cont' ><Link to="/Contacto">¡Contacta!</Link></button>
                        </div>

                    </section>

                    <section className='Partes'>
                        <div>
                            <div id='Seguros'>
                                <h3 id='h3'>Seguros</h3>
                                <p >Seguro para las actividades al aire libre</p>
                                <br />
                            </div>
                            <div>
                                <button className='boton'>VER MÁS</button>
                                <p className='pText'>Seguro Escalada</p>
                            </div>
                            <div>
                                <button className='boton'>VER MÁS</button>
                                <p className='pText'> Seguro Cicilismo</p>
                            </div>
                            <div>
                                <button className='boton'>VER MÁS</button>
                                <p className='pText'> Seguro Senderismo</p>
                            </div>
                            <div>
                                <button className='boton'>VER MÁS</button>
                                <p className='pText'>Seguro Tiro con arco</p>
                            </div>
                        </div>
                    </section>
                    <SocialPanel />
                </main>
            </div>
            <FooterPanel />
        </div >
    );
};

export default actividades;
