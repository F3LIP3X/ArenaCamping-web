import React from 'react';
import '../../Inicio/inicio.css'
import '../../Actividades/actividades.css'

//Imagenes Tiro con Arco
import TiroConArco1 from '../../assets/ImagenesActividades/TiroConArco1.jpg';
import TiroConArco2 from '../../assets/ImagenesActividades/TiroConArco2.jpg';

const MoreInfoTiroArco = () => {
    return (
        <div>
            <section>
                <h2>Tiro Con Arco</h2>
                <h4>Pon a prueba tu punteria en nuestra zona de tiro cona arco</h4>
                <br />

                <div id='ImagenesTiroArco'>
                    <img src={TiroConArco1} alt="TiroConArco1" id='TiroConArco1' />
                    <img src={TiroConArco2} alt="TiroConArco2" id='TiroConArco2' />
                </div>
                
            </section>
        </div>
    );
};

export default MoreInfoTiroArco;