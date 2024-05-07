import React from 'react';
import '../Entorno/Entorno.css';

import FooterPanel from '../Moduls/footer';
import HeaderPanel from '../Moduls/header';
import SocialPanel from '../Moduls/social';

import SliderComida from '../Moduls/Entorno/Slider';

//icons 
import { FaRoute } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";

//Comando para comentar Ctrl + K + C
const Entorno = () => {
    const ButtonGastronomia = () => {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
    }
    /*  const ContactaButon = () => {
          window.location.href = 'Contacta';
      }
  */
    // https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley
    return (
        <div>
            <HeaderPanel />
            <div className="main-content">
                <main>
                    <section>
                        <div className='icon-text-container'>
                            <h2 className='icon-text'><FaRoute className='icon' />Around</h2>
                        </div>
                    </section>
                    <section id="GastronomiaEntorno">
                        <div className='icon-text-container'>
                            <h2 className='icon-text'><BiFoodMenu className='icon' />Gastronomy</h2>
                        </div>

                        <hr />
                        <p> the pain itself should be followed by adipisicing the developer. His things
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
                             with desire for us times who are similar and said the most
                        </p>
                    </section>
                    <section className='dobleslider'>
                        <div><SliderComida /></div>
                        <div><SliderComida /></div>
                    </section>
                    
                    
                    <section id="DondeComer">
                        <div className='icon-text-container'>
                            <h2 className='icon-text'><MdFoodBank className='icon' />Where to Eat</h2>
                        </div>

                        <hr />
                        <ul id='RestaurantesEntorno'>
                            <li>Envero Restaurant</li>
                            <li>Savage Kitchen Restaurant</li>
                            <li>La Pradera Restaurant</li>
                        </ul>
                        <br />
                        <button class="BotonEntonros" onClick={ButtonGastronomia}>Press Here!!</button>
                    </section>
                    <section id="HistoriaEntorno">
                        <div className='icon-text-container'>
                            <h2 className='icon-text'><FaHistory className='icon' />History</h2>
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
                             with desire for us times who are similar and said the most
                        </p>
                    </section>
                    <section id="InformacionEntorno">
                        <div className='icon-text-container'>
                            <h2 className='icon-text'><FaInfoCircle className='icon' />Area Information</h2>
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
                             with desire for us times who are similar and said the most
                        </p>
                    </section>
                    <SocialPanel />
                    <FooterPanel />
                </main>
            </div>
        </div>
    );
};

export default Entorno;