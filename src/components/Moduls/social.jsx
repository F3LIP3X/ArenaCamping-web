import React from 'react';
import '../Inicio/inicio.css'

//logos redes
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import youtube from '../assets/youtube.png';


//Comando para comentar Ctrl + K + C
const SocialPanel = () => {
    return (
    <section className='redes'>
        <div id='titleRedes'>
            <h1 id='redes'>Puedes seguirnos en cualquiera de nuestras redes sociales.</h1>
        </div>
        <div className='lista-redes'>
            <div className='divs'>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img className='imagenes' src={instagram} alt="img6" />
                </a>
                <p className='pStyle'>Instagram</p>
            </div>
            <div className='divs'>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img className='imagenes' src={twitter} alt="img7" />
                </a>
                <p className='pStyle'>Twitter</p>
            </div>
            <div className='divs'>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <img className='imagenes' src={youtube} alt="img8" />
                </a>
                <p className='pStyle'>YouTube</p>
            </div>
        </div>
    </section>

                
    );
};
export default SocialPanel;