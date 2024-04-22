import React from 'react';

//CSS -----------------------
import '../index/index.css';
import '../index/index';
//Moduls

import FooterPanel from '../Moduls/footer';
import HeaderPanel from '../Moduls/header';
import SocialPanel from '../Moduls/social';
import GaleryPanel from '../Moduls/galery';



import React from 'react';
import GaleryPanel from '../Moduls/GaleryPanel2';

function FAQ() {
    return (
        <section>
        <div>
            <div className="index">
                <h1>Inicio</h1>
                <div className="question">
                    <h3>Sobre Nosotros</h3>
                    <svg width="15" height="10" viewBox="0 0 45 25">
                        <path 
                            d="M3 3L21 21L39 3" 
                            stroke="white"
                            strokeWidth="7" 
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
                <div className="answer">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius quaerat vitae itaque blanditiis. Impedit voluptatem illum consequuntur rem provident eveniet optio porro! Accusantium, distinctio! Et molestiae velit natus maiores accusamus dignissimos, corrupti odit sequi porro soluta labore fuga praesentium quo, nostrum, reprehenderit ab facere commodi deleniti ea quidem consequatur quia quos aperiam? Fuga placeat labore iusto nisi non unde cupiditate enim voluptatem debitis id ab sequi vitae, aut recusandae veniam? Excepturi tempore at adipisci quibusdam, est, ullam saepe ratione eum non cumque rerum corporis iusto reprehenderit neque id deserunt itaque sequi molestias harum perferendis debitis inventore consectetur. Quod architecto corrupti expedita, facere est cupiditate nobis tempora quis similique et dicta maxime corporis incidunt atque iusto, quam in laboriosam sed commodi pariatur. Necessitatibus commodi incidunt fuga, optio assumenda iure. Ratione nemo, accusamus ea recusandae sapiente voluptatum tenetur numquam? Nemo aspernatur aperiam itaque in optio hic aut perferendis eum similique tenetur exercitationem assumenda libero ab, molestias tempora magnam doloribus at mollitia beatae rem minima aliquid molestiae facere.
                    </p>
                </div>
            </div>

            <div className="index">
                <div className="question">
                    <h3>Contacto</h3>
                    <svg width="15" height="10" viewBox="0 0 45 25">
                        <path 
                            d="M3 3L21 21L39 3" 
                            stroke="white"
                            strokeWidth="7" 
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
                <div className="answer">
                    <p>Para realizar reservas o para obtener más información, no dudes en contactarnos:</p>
                    <p>Teléfono: 123-456-789</p>
                    <p>Email: info@campingnaturaleza.com</p>
                </div>
                     <GaleryPanel />
                    <SocialPanel />
                    <FooterPanel />
            </div>
        </div>
        </section>
    );
}

export default FAQ;
