import React from 'react';
import '../Inicio/inicio.css'
import { Link } from 'react-router-dom';

import FooterPanel from './footer';
import HeaderPanel from './header';
import SocialPanel from './social';

//Icon
import icon from '../assets/logo.ico';

//imagenes
import maps from '../assets/Imagenes Inicio/maps.png';
import entrada from '../assets/Imagenes Inicio/entrada.png';
import lavanderia from '../assets/Imagenes Inicio/lavadora.png';
import aparcamiento from '../assets/Imagenes Inicio/aparcamiento.png';

//Comando para comentar Ctrl + K + C
const firstIndex = () => {
    return (
        <div className='wrapper'>
            <HeaderPanel />
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
                    <SocialPanel />
                    <FooterPanel />
                </main>
            </div>
        </div>
    );
};

export default firstIndex;
