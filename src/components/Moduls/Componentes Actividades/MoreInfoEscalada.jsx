import React from 'react';
import '../../Inicio/inicio.css'

//Icons
import { GiMountainClimbing } from "react-icons/gi";

const MoreInfoEscalada = () => {
    return (
        <div>

            <section>
                <div class="icon-text-container">
                    <h2 class="icon-text"><GiMountainClimbing class="icon" /> Climbing Circuits</h2>
                </div>
                <br />
                <div>
                    <div>
                        <h4>Discover them all</h4>
                    </div>
                    <div>
                        <h4>
                            Everest Mountain Circuit
                        </h4>
                    </div>
                    <div>
                        <h4>
                            Pyrenees Circuit
                        </h4>
                    </div>
                    <div>
                        <h4>
                            Sierra Nevada Circuit
                        </h4>
                        <div className='divVideo'>
                            <iframe
                                className='iframeVideo'
                                src="https://www.youtube.com/embed/dQEW4JRAIaw?si=SfNQbQtvLDcChH9I"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    );
}

export default MoreInfoEscalada;
