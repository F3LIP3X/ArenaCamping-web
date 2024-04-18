import React from 'react';
import '../Inicio/inicio.css'

//imagenes
import maps from '../assets/Imagenes Inicio/maps.png';
import entrada from '../assets/Imagenes Inicio/entrada.png';
import lavanderia from '../assets/Imagenes Inicio/lavadora.png';
import aparcamiento from '../assets/Imagenes Inicio/aparcamiento.png';

//Comando para comentar Ctrl + K + C
const GaleryPanel = () => {
    return (
        <div>
            <section>
                <div>
                    <h2 className='galeryh2'>Galería</h2>
                </div>
                <div className='Galeria'>
                    <img src={maps} alt="img1" />
                    <img src={entrada} alt="img2" />
                    <img src={lavanderia} alt="img3" />
                    <img src={aparcamiento} alt="img4" />
                    <img src="https://camperparkgranada.es/wp-content/uploads/2023/07/ciclismo-de-carretera-367x367.jpg" alt="img5" />
                </div>
            </section>
        </div >
    );
};

export default GaleryPanel;