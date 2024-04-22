import React from 'react';
import '../../Entorno/Entorno.css';


//Imagenes
import Comida1 from '../../assets/Imagenes Entornos/Comida1.jpeg';
import Comida2 from '../../assets/Imagenes Entornos/Comida2.jpeg';
import Comida3 from '../../assets/Imagenes Entornos/Comida3.jpeg';

const SliderComida = () => {
    return (
        <div>
            <section id="Trading">
                <div className="containerEntorno">
                    <h3 className="text-center section-subheading">
                        -Sitios Populares-
                    </h3>
                    <h1 className="text-cent section-deading">
                        Tendencias de Comida
                    </h1>
                </div>
                <div className="divSliderEntorno">
                    <div className="swiper trading-slider">
                        <div className="swiper-wraper">
                            {   /* Slider inicio*/
                            <div className="swiper-slide trading-slide">
                                <div className="trading-slide-img">
                                    <img src={Comida1} alt="Trading" />
                                </div>
                                <div className="trading-slide-content">
                                    <h1 className="food-price">20€</h1>
                                    <div className="trading-slide-content-bottom">
                                        <h2 className="food-name">Lorem ipsum</h2>
                                        <h3 className="food-rating"><span>4.5</span></h3>
                                    </div>
                                </div>
                            </div>
                            /* Slider inicio*/  }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SliderComida;