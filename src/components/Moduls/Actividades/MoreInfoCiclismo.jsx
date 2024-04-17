import React from 'react';
import '../../Inicio/inicio.css'
import { Link } from 'react-router-dom';

const MoreInfoCiclismo = () => {
    return (
        <div>
            <section>
                <h2>Rutas de Bicicleta</h2>
                <h4>Descubrelos todos</h4>
                <br />

                <h4>Rutas Ciclismo Montaña</h4>

                <div>
                    <article>
                        Ruta Sierra Nevada
                    </article>
                </div>
                <div>
                    <article>
                        Ruta Alpujarras
                    </article>
                </div>
                <div>
                    <article>
                        Ruta Parque natural de Doñana
                    </article>
                </div>

                <br />
                <h4>Rutas Ciclismo Carretera</h4>

                <div>
                    <article>
                        Ruta Sierra Nevada
                    </article>
                </div>
                <div>
                    <article>
                        Ruta Alpujarras
                    </article>
                </div>
                <div>
                    <article>
                        Ruta Parque natural de Doñana
                    </article>
                </div>
            </section>
        </div>
    );
}

export default MoreInfoCiclismo;