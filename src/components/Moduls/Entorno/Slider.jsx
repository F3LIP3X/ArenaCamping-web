import React, { useEffect, useRef, useState } from 'react';
import {data} from './data';

import '../../Entorno/Entornomodulo.css';

const SliderComida = () => {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img")[currentIndex];
        if (imgNode) {
            imgNode.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, [currentIndex]);

    return (
        <section>
            <div className="main-continer-Entorno">
                <div className="slider-container">
                    <div className="container-imagesEntorno">
                        <ul ref={listRef}>
                            {
                                data.map((item) => {
                                    return <li key={item.id}>
                                        <img src={item.imgUrl} width={500} height={280} />
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SliderComida;
