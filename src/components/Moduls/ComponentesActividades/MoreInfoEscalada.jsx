import React from 'react';
import '../../Inicio/inicio.css'

const MoreInfoEscalada = () => {
    return (
        <div>

            <section>
                <h2>Circuitos de escalada</h2>
                <h4>Descubrelos todos</h4>
                <br />

                <div>
                    <article>
                        Circuito Monte Everest
                    </article>
                </div>
                <div>
                    <article>
                        Circuito Pirineos
                    </article>
                </div>
                <div>
                    <article>
                        Circuito Sierra Nevada
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
