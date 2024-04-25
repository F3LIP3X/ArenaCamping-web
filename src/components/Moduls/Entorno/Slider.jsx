import React, { useEffect, useRef, useState } from 'react';
import { data } from './data';
import '../../Moduls/Entorno/Slider.css';

//Iconos
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";

const SliderComida = () => {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

        if (imgNode) {
            imgNode.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, [currentIndex]);

    const scrollToImage = (direction) => {
        
        if (direction === 'prev') {
            setCurrentIndex(curr => {
                const isFirstSlide = currentIndex === 0;
                return isFirstSlide ? 0 : curr - 1;
            });
        } else {
            const isLastSlide = currentIndex === data.length - 1;
            if (!isLastSlide) {
                setCurrentIndex(curr => curr + 1);
            }
        }
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <section>
            <div className="main-continer-Entorno">
                <div className="slider-container-Entorno">
                    <button className='leftArrow' onClick={() => scrollToImage('prev')}>
                        <IoIosArrowDropleftCircle />
                    </button>
                    <button className='rightArrow' onClick={() => scrollToImage('next')}>
                        <IoIosArrowDroprightCircle />
                    </button>
                    <div className="container-imagesEntorno">
                        <ul ref={listRef}>
                            {data.map((item) => (
                                <li key={item.id}>
                                    <img src={item.imgUrl} width={500} height={280} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="dots-containerEntorno">
                        {data.map((_, idx) => (
                            <div key={idx} className={`dot-container-item ${idx === currentIndex ? "active" : ""}`} onClick={() => goToSlide(idx)}>
                                <VscDebugBreakpointDataUnverified />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SliderComida;
