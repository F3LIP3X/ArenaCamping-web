import React from 'react';
import { Link } from 'react-router-dom';

//css
import '../Contacto/contacto.css';

//Icon
import icon from '../assets/logo.ico';

//logos redes
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import youtube from '../assets/youtube.png';

const fifthIndex = () => {
    return (
        <div className='wrapper'>
            <header>
                {/* <img id='logo' src={icon} alt="Logo de Arena Camping" /> */}
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
                        <h1>Contacto</h1>
                    </section>
                    
                    <section className='redes'>
                        <div id='titleRedes'>
                            <h1>Puedes seguirnos en cualquiera de nuestras redes sociales:</h1>
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
                <div className='footer-container'>
                    <div className="footer-info">
                        <h4 id='info-Footer'>Información</h4>
                        <div className="info-table">
                            <div className="info-row">
                                <span>Empresa: </span>
                                <span>Arena Camping Granada</span>
                            </div>
                            <div className="info-row">
                                <span>Dirección: </span>
                                <span>18183 Huétor de Santillán Granda, España</span>
                            </div>
                            <div className="info-row">
                                <span>Teléfono: </span>
                                <span>666-666-666</span>
                            </div>
                            <div className="info-row">
                                <span>Email: </span>
                                <span>info@campingnaturaleza.com</span>
                            </div>
                        </div>
                    </div >
                    <div className="footer-image">
                        <img src={icon} alt="Arena Camping" />
                    </div>
                </div >
                <br />
                <p className="copyright">© 2024 | Felipe Toledano Escudero</p>
                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><a href="#about">Acerca de</a></li>
                        <li><a href="#contact">Contacto</a></li>
                        <li><a href="#work-with-us">Trabaja con nosotros</a></li>
                    </ul>
                </nav>
            </footer >
        </div>
    );
};
export default fifthIndex;