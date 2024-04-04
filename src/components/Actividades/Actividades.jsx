import React from 'react';
import '../Actividades/actividades.css';
import icon from '../assets/logo.ico';
import { Link } from 'react-router-dom';

//Imagenes
import Excursiones from '../assets/ImagenesActividades/ExcursioenesHistoricas.jpg'
import Senderismo from '../assets/ImagenesActividades/SenderismoBosque.jpg'
import BiciM from '../assets/ImagenesActividades/BiciMontaña.jpg'
import BiciC from '../assets/ImagenesActividades/BiciCarretera.jpg'

const actividades = () => {
    return (
        <div className='wrapper'>
            <header>
                <head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
                </head>

                <img id='icoHeader' src={icon} alt="Logo de Arena Camping" />
                <h1 id=''>Arena Camping</h1>
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
                <main className='titulo'>
                    <section>
                        <h1>Actividades</h1>

                    </section>

                    <section id="actividad" class="tabla">
                        <div>
                            <div>
                                <h3 id='h3'>Actividades</h3>
                                <br />
                            </div>
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
                        <button>¡Contacta!</button>
                    </section>

                    <section className='Partes'>
                    <div>
                            <div>
                                <h3 id='h3'>Seguros</h3>
                                <p>Seguro para las actividades al aire libre</p>
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

                   {/*  <section>
                        <article className="articulos">
                            <i class="fa-solid fa-person"></i>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus risus nec sapien molestie, quis tincidunt magna ultrices. Proin rutrum metus nulla, eget rhoncus libero scelerisque vitae. Nam laoreet arcu pharetra massa iaculis pharetra. Vestibulum auctor, tortor ut posuere pellentesque, mauris ex auctor eros, id finibus ante lacus non tortor. Nam ut tortor commodo, condimentum dolor in, facilisis eros. Vivamus auctor nisl sed ultricies fermentum. Etiam sollicitudin rhoncus aliquam. Nunc vitae condimentum quam. Suspendisse consectetur dui et leo iaculis malesuada. Nam eget iaculis tellus. Quisque facilisis dapibus dui aliquam consectetur. Vivamus aliquet, massa ac laoreet vestibulum, turpis dolor consectetur nisi, vel finibus ex magna sed nibh. Cras aliquet arcu non elit mattis fringilla. Nulla condimentum malesuada hendrerit.
                        </article>
                        <article className="articulos">
                            <i class="fa-solid fa-person-walking"></i>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus risus nec sapien molestie, quis tincidunt magna ultrices. Proin rutrum metus nulla, eget rhoncus libero scelerisque vitae. Nam laoreet arcu pharetra massa iaculis pharetra. Vestibulum auctor, tortor ut posuere pellentesque, mauris ex auctor eros, id finibus ante lacus non tortor. Nam ut tortor commodo, condimentum dolor in, facilisis eros. Vivamus auctor nisl sed ultricies fermentum. Etiam sollicitudin rhoncus aliquam. Nunc vitae condimentum quam. Suspendisse consectetur dui et leo iaculis malesuada. Nam eget iaculis tellus. Quisque facilisis dapibus dui aliquam consectetur. Vivamus aliquet, massa ac laoreet vestibulum, turpis dolor consectetur nisi, vel finibus ex magna sed nibh. Cras aliquet arcu non elit mattis fringilla. Nulla condimentum malesuada hendrerit.
                        </article>
                        <article className="articulos">
                            <i class="fa-solid fa-bicycle"></i>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus risus nec sapien molestie, quis tincidunt magna ultrices. Proin rutrum metus nulla, eget rhoncus libero scelerisque vitae. Nam laoreet arcu pharetra massa iaculis pharetra. Vestibulum auctor, tortor ut posuere pellentesque, mauris ex auctor eros, id finibus ante lacus non tortor. Nam ut tortor commodo, condimentum dolor in, facilisis eros. Vivamus auctor nisl sed ultricies fermentum. Etiam sollicitudin rhoncus aliquam. Nunc vitae condimentum quam. Suspendisse consectetur dui et leo iaculis malesuada. Nam eget iaculis tellus. Quisque facilisis dapibus dui aliquam consectetur. Vivamus aliquet, massa ac laoreet vestibulum, turpis dolor consectetur nisi, vel finibus ex magna sed nibh. Cras aliquet arcu non elit mattis fringilla. Nulla condimentum malesuada hendrerit.
                        </article>
                        <article className="articulos">
                            <i class="fa-solid fa-bicycle"></i>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus risus nec sapien molestie, quis tincidunt magna ultrices. Proin rutrum metus nulla, eget rhoncus libero scelerisque vitae. Nam laoreet arcu pharetra massa iaculis pharetra. Vestibulum auctor, tortor ut posuere pellentesque, mauris ex auctor eros, id finibus ante lacus non tortor. Nam ut tortor commodo, condimentum dolor in, facilisis eros. Vivamus auctor nisl sed ultricies fermentum. Etiam sollicitudin rhoncus aliquam. Nunc vitae condimentum quam. Suspendisse consectetur dui et leo iaculis malesuada. Nam eget iaculis tellus. Quisque facilisis dapibus dui aliquam consectetur. Vivamus aliquet, massa ac laoreet vestibulum, turpis dolor consectetur nisi, vel finibus ex magna sed nibh. Cras aliquet arcu non elit mattis fringilla. Nulla condimentum malesuada hendrerit.
                        </article>

                    </section> */}

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

export default actividades;
