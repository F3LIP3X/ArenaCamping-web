import React from 'react';
import '../Inicio/inicio.css'

import FooterPanel from '../Moduls/footer';
import HeaderPanel from '../Moduls/header';
import SocialPanel from '../Moduls/social';
import GaleryPanel from '../Moduls/galery';

// Comment shortcut: Ctrl + K + C
const firstIndex = () => {
    return (
        <div>
            <HeaderPanel />
            <div className="main-content">
            <div class="loader"></div>
                <main>
                    <section>
                        <h2>Home</h2>
                    </section>
                    <section id="about">
                        <h2 id='aboutUs'>About Us</h2>
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
                            itaque sequi molestias.</p>
                    </section>

                    <section id="contact">
                        <h2 id='contactos'>Contact</h2>
                        <hr />
                        <p>To make reservations or for more information, feel free to contact us:</p>
                        <p>Phone: 123-456-789</p>
                        <p>Email: info@campingnature.com</p>
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
