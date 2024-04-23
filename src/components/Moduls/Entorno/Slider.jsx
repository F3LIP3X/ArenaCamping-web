import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importa las imágenes
import imagenComida1 from '../../assets/Imagenes Entornos/Comida1.jpeg';
import imagenComida2 from '../../assets/Imagenes Entornos/Comida2.jpeg';
import imagenComida3 from '../../assets/Imagenes Entornos/Comida3.jpeg';

const SliderComida = () => {
    // Configuración del slider 
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className='fotosCarrousel'>
            <Slider {...settings}>
                {/* Renderiza cada imagen dentro del Slider */}
                <div  className="carousel-item">
                    <img src={imagenComida1} className="rounded-box slider-image" alt="Comida1Entorno" />
                    <div><a href=""><h1 color='black'>hola</h1></a></div>
                </div> 
                <div  className="carousel-item">
                    <img src={imagenComida2} className="rounded-box slider-image" alt="Comida2Entorno" />
                </div> 
                <div  className="carousel-item">
                    <img src={imagenComida3} className="rounded-box slider-image" alt="Comida3Entorno" />
                </div> 
            </Slider>
        </div>
    );
};

export default SliderComida;
