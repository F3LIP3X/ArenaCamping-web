import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../Inicio/inicio.css';
import '../../Actividades/actividades.css';

//Icons
import { GiArcheryTarget } from "react-icons/gi";


// Images for Archery
import TiroConArco1 from '../../assets/ImagenesActividades/TiroConArco1.jpg';
import TiroConArco2 from '../../assets/ImagenesActividades/TiroConArco2.jpg';
import tiroaoarco3 from '../../assets/ImagenesActividades/tiroaoarco3.jpg';
import tiroaoarco4 from '../../assets/ImagenesActividades/tiroaoarco4.jpg';

// Images for the gallery


const MoreInfoTiroArco = () => {
    return (
        <div>
            <section className="desktop-only">
                <div className='icon-text-container'>
                    <h2 className='icon-text'><GiArcheryTarget class="icon"/>Archery</h2>
                </div>
                <h4>Test your aim in our archery zone</h4>
                {/* Add any additional content you want to display only on desktop here */}
                <div className='Galeria'>
                    <img src={TiroConArco1} alt="img1" />
                    <img src={TiroConArco2} alt="img2" />
                    <img src={tiroaoarco3} alt="img3" />
                    <img src={tiroaoarco4} alt="img4" />

                </div>
            </section>

            <section className="responsive-gallery">
                <div className='icon-text-container'>
                    <h2 className='icon-text'><GiArcheryTarget />Archery</h2>
                </div>
                <h4>Test your aim in our archery zone</h4>
                <br />

                <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                    <Slider>
                        <div className="carousel-item">
                            <img src={TiroConArco1} className="rounded-box" alt="Archery1" />
                        </div>
                        <div className="carousel-item">
                            <img src={TiroConArco2} className="rounded-box" alt="Archery2" />
                        </div>
                        <div className="carousel-item">
                            <img src={tiroaoarco3} className="rounded-box" alt="Archery3" />
                        </div>
                        <div className="carousel-item">
                            <img src={tiroaoarco4} className="rounded-box" alt="Archery4" />
                        </div>
                    </Slider>
                </div>
            </section>
        </div>
    );
};

export default MoreInfoTiroArco;
