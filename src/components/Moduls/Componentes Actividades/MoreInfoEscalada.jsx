import React from 'react';
import '../../Inicio/inicio.css'

const MoreInfoEscalada = () => {
    return (
        <div>

            <section>
                <h2>Climbing Circuits</h2>
                <h4>Discover them all</h4>
                <br />

                <div>
                    <article>
                        Everest Mountain Circuit
                    </article>
                </div>
                <div>
                    <article>
                        Pyrenees Circuit
                    </article>
                </div>
                <div>
                    <article>
                        Sierra Nevada Circuit
                    </article>
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
            </section>

        </div>
    );
}

export default MoreInfoEscalada;
