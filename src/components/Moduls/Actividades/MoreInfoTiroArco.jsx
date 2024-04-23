import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../Inicio/inicio.css';
import '../../Actividades/actividades.css';

// Imagens Tiro con Arco
import TiroConArco1 from '../../assets/ImagenesActividades/TiroConArco1.jpg';
import TiroConArco2 from '../../assets/ImagenesActividades/TiroConArco2.jpg';
import tiroaoarco3 from '../../assets/ImagenesActividades/tiroaoarco3.jpg';
import tiroaoarco4 from '../../assets/ImagenesActividades/tiroaoarco4.jpg';

const MoreInfoTiroArco = () => {
    return (
        <section className="responsive-gallery">
            <h2>Tiro Con Arco</h2>
            <h4>Pon a prueba tu punteria en nuestra zona de tiro con arco</h4>
            <br />

            <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                <Slider>
                    <div className="carousel-item">
                        <img src={TiroConArco1} className="rounded-box" alt="TiroConArco1" />
                    </div> 
                    <div className="carousel-item">
                        <img src={TiroConArco2} className="rounded-box" alt="TiroConArco2" />
                    </div> 
                    <div className="carousel-item">
                        <img src={tiroaoarco3} className="rounded-box" alt="tiroaoarco3" />
                    </div> 
                    <div className="carousel-item">
                        <img src={tiroaoarco4} className="rounded-box" alt="tiroaoarco4" />
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default MoreInfoTiroArco;