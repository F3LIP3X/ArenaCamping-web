import React from 'react';
import '../Inicio/inicio.css'

import FooterPanel from './footer';
import HeaderPanel from './header';
import SocialPanel from './social';
import GaleryPanel from './galery';

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
                    <GaleryPanel />
                    <SocialPanel />
                    <FooterPanel />
                </main>
            </div>
        </div>
    );
};

export default firstIndex;
