import React from 'react';
import '../Inicio/inicio.css'
import icon from '../assets/logo.ico';
import {Link } from 'react-router-dom';


const firstIndex = () => {
    return (
        <div className='wrapper'>
            <header>
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
                <main>
                    <section id="home">
                        <h2>¡¡Bienvenido!!</h2>
                        <p>¡En Arena Camping puedes disfruta de la tranquilidad y belleza de la naturaleza en nuestro camping!</p>
                    </section>

                    <section id="about">
                        <h2>Sobre Nosotros</h2>
                        <p>Somos un camping familiar ubicado en medio de exuberantes bosques y hermosos paisajes naturales. Ofrecemos una amplia gama de servicios para hacer que tu estadía sea cómoda y memorable.</p>
                    </section>

                    <section id="contact">
                        <h2>Contacto</h2>
                        <p>Para realizar reservas o para obtener más información, no dudes en contactarnos:</p>
                        <p>Teléfono: 123-456-789</p>
                        <p>Email: info@campingnaturaleza.com</p>
                    </section>
                </main>
            </div>

            <footer className="footer-page">
                <div className='foot'>
                    <h3>© 2024 | Felipe Toledano Escudero</h3>
                    <h3>Télefono de Contacto: +34 625 86 46 17</h3>
                    <nav>
                        <ul>
                            <li><a>Inicio</a></li>
                            <li><a>Acerca de</a></li>
                            <li><a>Contacto</a></li>
                            p     
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default firstIndex;
