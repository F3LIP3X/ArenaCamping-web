import React from 'react';
import '../Entorno/Entorno.css';


import FooterPanel from '../Moduls/footer';
import HeaderPanel from '../Moduls/header';
import SocialPanel from '../Moduls/social';
import GaleryPanel from '../Moduls/galery';
import Contacta from '../Contacto/Contacto';

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
                        <h2>Inicio</h2>
                    </section>
                    <section id="InformacionEntorno">
                        <h2 id='aboutUs'>Información de la zona</h2>
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
                    <section id="HistoriaEntorno">
                        <h2 id='aboutUs'>Historia</h2>
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
                    <section id="GastronomiaEntorno">
                        <h2 id='aboutUs'>Gastronomia</h2>
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
                    <section id="DondeComer">
                        <h2 id='aboutUs'>Donde Comer</h2>
                        <hr />
                        <ul id='RestaurantesEntorno'>
                            <li>Restaurante Envero</li>
                            <li>Restaurante ocina Salvaje</li>
                            <li>Restaurante la Pradera</li>
                        </ul>
                        <br />
                        <button class="BotonEntonros" onClick={ButtonGastronomia}>¡¡Pulsa Aqui!!</button>


                    </section>

                    <section id="contact">
                        <h2 id='contactos'>Reserva ya tu plaza en el Arena Camping</h2>
                        <hr />
                        <p>Disponemos de X plazas de X metros, ¡Contactanos!</p>
                        <button id='ContactaEntorno' onClick={Contacta}>¡Contacta!</button>
                    </section>
                    <GaleryPanel />
                    <SocialPanel />
                    <FooterPanel />
                </main>
            </div>
        </div>
    );
};

export default Entorno;