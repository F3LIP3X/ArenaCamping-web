import React from 'react';

// CSS
import '../Precios/Precios.css';

//imagenes
import Agua from '../assets/Imagenes Precios/agua.png'
import Arco from '../assets/Imagenes Precios/arco.png'
import Bicicleta from '../assets/Imagenes Precios/bicicleta.png'
import Ducha from '../assets/Imagenes Precios/ducha.png'
import Electrodomesticos from '../assets/Imagenes Precios/electrodomestico.png'
import Senderismo from '../assets/Imagenes Precios/senderismo.png'
import Estacionamiento from '../assets/Imagenes Precios/estacionamiento.png'
import Escalada from '../assets/Imagenes Precios/escalada.png'

//Moduls
import FooterPanel from '../Moduls/footer';
import SocialPanel from '../Moduls/social';
import Header from '../Moduls/header';


const precios = () => {
    return (
        <div>
            <Header />
            <div className="main-content">
                <main className='informacion'>
                    <section>
                        <h2>Precios</h2>
                    </section>

                    <section>
                        <div className="contenedor">

                            <div className="tablaprecios">
                                <h2>Aparcamiento Zona 1</h2>
                                <img src={Estacionamiento} alt="img1"></img>
                                <h3>100 €</h3>
                                <p>asjdsafdhasgfashfa</p>
                                <a className="Boton" href="">Más Info</a>
                            </div>
                            <div className="tablaprecios">
                                <h2>Aparcamiento Zona 2</h2>
                                <img src={Estacionamiento} alt="img1"></img>
                                <h3>200 €</h3>
                                <p>asjdsafdhasgfashfa</p>
                                <a className="Boton" href="">Más Info</a>
                            </div>
                            <div className="tablaprecios">
                                <h2>Aparcamiento Zona 3</h2>
                                <img src={Estacionamiento} alt="img1"></img>
                                <h3>300 €</h3>
                                <p>asjdsafdhasgfashfa</p>
                                <a className="Boton" href="">Más Info</a>
                            </div>

                            <div className="tablaprecios">
                                <h2>Alquiler Duchas</h2>
                                <img src={Ducha} alt="img2"></img>
                                <h3>1€ / 5M</h3>
                                <p>asjdsafdhasgfashfa</p>
                                <a className="Boton" href="">Más Info</a>
                            </div>
                            <div className="tablaprecios">
                                <h2>Alquiler de Electrodomésticos</h2>
                                <img src={Electrodomesticos} alt="img3"></img>
                                <h3>5€ / 1H</h3>
                                <p>asjdsafdhasgfashfa</p>
                                <a className="Boton" href="">Más Info</a>
                            </div>
                            <div className="tablaprecios">
                                <h2>Llenado/Vaciado de aguas</h2>
                                <img src={Agua} alt="img4"></img>
                                <h3>3€ / 1,5L</h3>
                                <p>asjdsafdhasgfashfa</p>
                                <a className="Boton" href="">Más Info</a>
                            </div>

                            <div className="tablaprecios">
                                <h2>Seguro Escalada</h2>
                                <img src={Escalada} alt="img5"></img>
                                <h3>1€ / 5M</h3>
                                <p>asjdsafdhasgfashfa</p>
                                <a className="Boton" href="">Más Info</a>
                            </div>
                            <div className="tablaprecios">
                                <h2>Seguro Tiro con Arco</h2>
                                <img src={Arco} alt="img6"></img>
                                <h3>5€ / 1H</h3>
                                <p>asjdsafdhasgfashfa</p>
                                <a className="Boton" href="">Más Info</a>
                            </div>
                            <div className="tablaprecios">
                                <h2>Seguro de Ciclismo</h2>
                                <img src={Bicicleta} alt="img7"></img>
                                <h3>3€ / 1,5L</h3>
                                <p>asjdsafdhasgfashfa</p>
                                <a className="Boton" href="">Más Info</a>
                            </div>

                            <div className="tablaprecios">
                                <h2>Seguro Senderismo</h2>
                                <img src={Senderismo} alt="img8"></img>
                                <h3>3€ / 1,5L</h3>
                                <p>asjdsafdhasgfashfa</p>
                                <a className="Boton" href="">Más Info</a>
                            </div>

                        </div>
                    </section>

                    <SocialPanel />
                    <FooterPanel />
                </main>
            </div>
        </div >
    );
};

export default precios;
