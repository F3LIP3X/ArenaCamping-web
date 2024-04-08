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
