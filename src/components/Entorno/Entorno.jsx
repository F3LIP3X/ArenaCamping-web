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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius
                            quaerat vitae itaque blanditiis. Impedit voluptatem illum consequuntur
                            rem provident eveniet optio porro! Accusantium, distinctio! Et molestiae
                            velit natus maiores accusamus dignissimos, corrupti odit sequi porro
                            commodi deleniti ea quidem consequatur quia quos aperiam? Fuga
                            placeat labore iusto nisi non unde cupiditate enim voluptatem
                            debitis id ab sequi vitae, aut recusandae veniam? Excepturi
                            tempore at adipisci quibusdam, est, ullam saepe ratione eum
                            non cumque rerum corporis iusto reprehenderit neque id deserunt
                            itaque sequi molestias harum perferendis debitis inventore
                            consectetur. Quod architecto corrupti expedita, facere est
                            cupiditate nobis tempora quis similique et dicta maxime
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
                        </p>
                    </section>
                    <section id="InformacionEntorno">
                        <div className='icon-text-container'>
                            <h2 className='icon-text'><FaInfoCircle className='icon' />Area Information</h2>
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
                            itaque sequi molestias harum perferendis debitis inventore
                            consectetur. Quod architecto corrupti expedita, facere est
                            cupiditate nobis tempora quis similique et dicta maxime
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