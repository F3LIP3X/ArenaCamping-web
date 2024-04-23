import React from 'react';
import '../Reserva/reserva.css';

//Components
import FooterPanel from '../Moduls/footer';
import HeaderPanel from '../Moduls/header';
import SocialPanel from '../Moduls/social';
import SvgPanel from '../Moduls/svg';
//IMG


//Imports


//Comando para comentar Ctrl + K + C
const Reserva = () => {
    return (
        <div>
            <HeaderPanel />
            <div className="main-content">
                <main>
                    <section>
                        <h2>Reserva</h2>
                    </section>
                    <section>
                        <div className='SectioPanel'>
                            <SvgPanel />
                        </div>
                    </section>
                    <SocialPanel />
                    <FooterPanel />
                </main>
            </div>
        </div>
    );
};
export default Reserva;