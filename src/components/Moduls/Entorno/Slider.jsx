import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../Inicio/inicio.css';
import '../../Actividades/actividades.css';

// Importa las imágenes
import imagenComida1 from '../../assets/Imagenes Entornos/Comida1.jpeg';
import imagenComida2 from '../../assets/Imagenes Entornos/Comida2.jpeg';
import imagenComida3 from '../../assets/Imagenes Entornos/Comida3.jpeg';


const SliderComida = () => {
    // Configuración del slider 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            <Slider {...settings}>
                {/* Renderiza cada imagen dentro del Slider */}
                <div className="carousel-item">
                    <img src={imagenComida1} className="rounded-box" alt="TiroConArco1" />
                </div> 
                <div className="carousel-item">
                    <img src={imagenComida2} className="rounded-box" alt="TiroConArco2" />
                </div> 
                <div className="carousel-item">
                    <img src={imagenComida3} className="rounded-box" alt="tiroaoarco3" />
                </div> 
            </Slider>
        </div>
    );
};

export default SliderComida;
