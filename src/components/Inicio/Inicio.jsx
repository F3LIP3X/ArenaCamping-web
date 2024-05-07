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
        <div className='fade-in'>
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
                        <p>the pain itself should be followed by adipisicing the developer. His things
                             therefore let him seek the flattery of life. It prevents them from achieving that pleasure
                             They provide an option for further! Accusers, distinction! And trouble
                             He wants the elders to accuse the most worthy, the corrupt he hates to follow further
                             For whom shall I open? Escape
                             let him be pleased with just labor, unless he derives pleasure from desire
                             Do you owe it to the pursuit of life, or the pardon of refusing it? I will wait
                             at the time of obtaining some, it is, for any reason often him
                             nor do they forsake the just things of the body
                             and therefore to pursue the difficulties of bearing these debts by finding them
                             will be followed. What is convenient for a corrupt architect to do
                             with desire for us times who are similar and said the most</p>
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