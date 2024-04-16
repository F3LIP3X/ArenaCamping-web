import React from 'react';
import '../Inicio/inicio.css'

import FooterPanel from '../Moduls/footer';
import HeaderPanel from '../Moduls/header';
import SocialPanel from '../Moduls/social';
import GaleryPanel from '../Moduls/galery';

//Comando para comentar Ctrl + K + C
const locationPanel = () => {
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius
                            quaerat vitae itaque blanditiis. Impedit voluptatem illum consequuntur
                            rem provident eveniet optio porro! Accusantium, distinctio! Et molestiae
                            velit natus maiores accusamus dignissimos, corrupti odit sequi porro
                            soluta labore fuga praesentium quo, nostrum, reprehenderit ab facere
                            commodi deleniti ea quidem consequatur quia quos aperiam? Fuga
                            placeat labore iusto nisi non unde cupiditate enim voluptatem
                            debitis id ab sequi vitae, aut recusandae veniam? Excepturi
                            tempore at adipisci quibusdam, est, ullam saepe ratione eum
                            non cumque rerum corporis iusto reprehenderit neque id deserunt
                            itaque sequi molestias harum perferendis debitis inventore
                            consectetur. Quod architecto corrupti expedita, facere est
                            cupiditate nobis tempora quis similique et dicta maxime
                            corporis incidunt atque iusto, quam in laboriosam sed
                            commodi pariatur. Necessitatibus commodi incidunt fuga,
                            optio assumenda iure. Ratione nemo, accusamus ea recusandae
                            sapiente voluptatum tenetur numquam? Nemo aspernatur
                            aperiam itaque in optio hic aut perferendis eum similique
                            tenetur exercitationem assumenda libero ab, molestias tempora magnam
                            doloribus at mollitia beatae rem minima aliquid molestiae facere.</p>
                    </section>

                    <div class="container-form">
                        <section>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.3720634089427!2d-3.628402!3d37.167628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fc893bf850db%3A0x71683dc7
                                a592441b!2sHuerta%20del%20Sello!5e0!3m2!1spt-PT!2ses!4v1713258937859!5m2!1spt-PT!2ses"
                                id='iframeLocation'
                                height={600}
                                style={{ border: '0' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>

                        </section>

                    </div>

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

export default locationPanel;
