import React, { useEffect, useRef, useState } from 'react';
import { data } from './data';
import '../../Moduls/Entorno/Slider.css';

// Iconos
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";

const SliderComida = () => {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true); // Estado para habilitar/deshabilitar la reproducción automática
    const intervalRef = useRef(null); // Ref para el temporizador

    useEffect(() => {
        // Función para cambiar automáticamente el índice de la imagen visible
        const autoPlayHandler = () => {
            setCurrentIndex(prevIndex => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
        };

        // Iniciar la reproducción automática al montar el componente
        if (autoPlay) {
            intervalRef.current = setInterval(autoPlayHandler, 10000); // Cambiar cada 10 segundos (ajustar según sea necesario)
        }

        // Detener la reproducción automática al desmontar el componente
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [autoPlay]);

    const scrollToImage = (index) => {
        // Cambiar manualmente de imagen
        setCurrentIndex(index);
        // Reiniciar el temporizador si la reproducción automática está habilitada
        resetAutoPlayTimer();
    };

    const toggleAutoPlay = () => {
        setAutoPlay(prevState => !prevState);
    };

    const resetAutoPlayTimer = () => {
        // Borra el temporizador existente
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        // Si la reproducción automática está habilitada, configura un nuevo temporizador
        if (autoPlay) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex(prevIndex => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
            }, 10000); // Cambiar cada 10 segundos (ajustar según sea necesario)
        }
    };

    return (
        <section>
            <div className="main-continer-Entorno">
                <div className="slider-container-Entorno">
                    <button className='leftArrow' onClick={() => scrollToImage((currentIndex + data.length - 1) % data.length)}>
                        <IoIosArrowDropleftCircle />
                    </button>
                    <button className='rightArrow' onClick={() => scrollToImage((currentIndex + 1) % data.length)}>
                        <IoIosArrowDroprightCircle />
                    </button>
                    <div className="container-imagesEntorno">
                        <ul ref={listRef}>
                            {data.map((item, index) => (
                                <li key={item.id} style={{ display: index === currentIndex ? 'inline' : 'none' }}>
                                    <img src={item.imgUrl} width={500} height={280} alt={`Slider ${index}`} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="dots-containerEntorno">
                        {data.map((_, idx) => (
                            <div key={idx} className={`dot-container-item ${idx === currentIndex ? "active" : ""}`} onClick={() => scrollToImage(idx)}>
                                <VscDebugBreakpointDataUnverified />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <button onClick={toggleAutoPlay}>{autoPlay ? 'Pausar' : 'Reproducir'} automático</button>
            </div>
        </section>
    );
};

export default SliderComida;
