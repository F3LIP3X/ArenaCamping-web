import React, { useEffect, useRef, useState } from 'react';
import { data } from './data';
import '../../Moduls/Entorno/Slider.css';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";

const SliderComida = () => {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    const intervalRef = useRef(null);

    useEffect(() => {
        const autoPlayHandler = () => {
            setCurrentIndex(prevIndex => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
        };

        if (autoPlay) {
            intervalRef.current = setInterval(autoPlayHandler, 5000);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [autoPlay]);

    const scrollToImage = (index) => {
        setCurrentIndex(index);
        resetAutoPlayTimer();
    };

    const toggleAutoPlay = () => {
        setAutoPlay(prevState => !prevState);
    };

    const resetAutoPlayTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        if (autoPlay) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex(prevIndex => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
            }, 10000);
        }
    };

    return (
        <div>
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
                                    <img src={item.imgUrl} style={{ width: '100%', height: '100%' }} alt={`Slider ${index}`} />
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
                <button id='AutomaticoSlider' onClick={toggleAutoPlay}>{autoPlay ? 'Pausar' : 'Reproducir'} automático</button>
            </div>
        </div>
    );
};

export default SliderComida;
