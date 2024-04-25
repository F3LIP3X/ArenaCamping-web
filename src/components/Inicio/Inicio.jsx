import React from 'react';
import '../Inicio/inicio.css'

//Modulos
import FooterPanel from '../Moduls/footer';
import HeaderPanel from '../Moduls/header';
import SocialPanel from '../Moduls/social';
import GaleryPanel from '../Moduls/galery';
import ContactPanel from '../Moduls/contacto';

//Iconos
import { MdHome } from "react-icons/md";
import { AiOutlineCaretRight } from "react-icons/ai";

// Comment shortcut: Ctrl + K + C
const firstIndex = () => {
    return (
        <div>
            <HeaderPanel />
            <div className="main-content">
                <div className="loader"></div>
                <main>
                    <section>
                        <div class="icon-text-container">
                            <h2 class="icon-text"><MdHome class="icon" /> Home</h2>
                        </div>
                    </section>
                    <section id="about">
                        <div class="icon-text-container">
                            <h2 class="icon-text"><AiOutlineCaretRight class="icon" /> About Us</h2>
                        </div>
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

                    <ContactPanel />
                    <GaleryPanel />
                    <SocialPanel />
                    <FooterPanel />
                </main>
            </div>
        </div>
    );
};

export default firstIndex;
