import React from 'react';
import '../Inicio/inicio.css'
import { Link } from 'react-router-dom';

import FooterPanel from './footer'; // Importa el componente FooterPanel desde el archivo footer.js

//Icon
import icon from '../assets/logo.ico';

//imagenes
import maps from '../assets/Imagenes Inicio/maps.png';
import entrada from '../assets/Imagenes Inicio/entrada.png';
import lavanderia from '../assets/Imagenes Inicio/lavadora.png';
import aparcamiento from '../assets/Imagenes Inicio/aparcamiento.png';

//logos redes
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import youtube from '../assets/youtube.png';


//Comando para comentar Ctrl + K + C
const firstIndex = () => {
    return (
        <div className='wrapper'>
            <header>
                {/* <img id='logo' src={icon} alt="Logo de Arena Camping" /> */}
                <h1 id='webName'>Arena Camping</h1>
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
                <main>
                    <section id="home">
                        <h2>Inicio</h2>
                    </section>
                    <section id="about">
                        <h2 id='aboutUs'>Sobre Nosotros</h2>
                        <hr />
                        <p>Somos un camping familiar ubicado en medio de exuberantes bosques y hermosos paisajes naturales. Ofrecemos una amplia gama de servicios para hacer que tu estadía sea cómoda y memorable.</p>
                    </section>

                    <section id="contact">
                        <h2 id='contactos'>Contacto</h2>
                        <hr />
                        <p>Para realizar reservas o para obtener más información, no dudes en contactarnos:</p>
                        <p>Teléfono: 123-456-789</p>
                        <p>Email: info@campingnaturaleza.com</p>
                    </section>
                    <section className='Galeria'>
                        <img src={maps} alt="img1" />
                        <img src={entrada} alt="img2" />
                        <img src={lavanderia} alt="img3" />
                        <img src={aparcamiento} alt="img4" />
                        <img src="https://camperparkgranada.es/wp-content/uploads/2023/07/ciclismo-de-carretera-367x367.jpg" alt="img5" />
                    </section>
                    <p>_</p>
                    <section className='redes'>
                        <div id='titleRedes'>
                            <h1 id='redes'>Puedes seguirnos en cualquiera de nuestras redes sociales.</h1>
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
                    {/* Agrega el componente FooterPanel aquí */}
                    <FooterPanel />
                </main>
            </div>
        </div>
    );
};

export default firstIndex;
