import React from 'react';
import '../Reserva/reserva.css';

//Components
import FooterPanel from '../Moduls/footer';
import HeaderPanel from '../Moduls/header';
import SocialPanel from '../Moduls/social';
import SvgComponent from '../Moduls/svg';
//IMG


//Imports


// Shortcut to comment Ctrl + K + C
const Reserva = () => {
    return (
        <div>
            <HeaderPanel />
            <div className="main-content">
                <main>
                    <section>
                        <h2>Reservation</h2>
                    </section>
                    <section>
                        <div className='SectioPanel'>
                            <SvgComponent />
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
