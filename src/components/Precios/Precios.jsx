import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import '../Precios/Precios.css';

//imagenes
import Agua from '../assets/Imagenes Precios/agua.webp'
import Arco from '../assets/Imagenes Precios/arco.webp'
import Bicicleta from '../assets/Imagenes Precios/bicicleta.webp'
import Ducha from '../assets/Imagenes Precios/ducha.webp'
import Electrodomesticos from '../assets/Imagenes Precios/electrodomestico.webp'
import Senderismo from '../assets/Imagenes Precios/senderismo.webp'
import Estacionamiento from '../assets/Imagenes Precios/estacionamiento.webp'
import Escalada from '../assets/Imagenes Precios/escalada.webp'

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
                        <h2>Prices</h2>
                    </section>

                    <section>
                        <div className="contenedor">
                            <div className="tablaprecios">
                                <div className="textosh2">
                                    <h2>Parking Zone 1</h2>
                                </div>
                                <img className="preciosimg" src={Estacionamiento} alt="img1"></img>
                                <h3>100 €</h3>
                                <button className='buttonPrices'>
                                    <a href="#aparcamiento1">
                                        <span>More Info</span>
                                    </a>
                                </button>
                            </div>
                            <div className="tablaprecios">
                                <div className="textosh2">
                                    <h2>Parking Zone 2</h2>
                                </div>
                                <img className="preciosimg" src={Estacionamiento} alt="img1"></img>
                                <h3>200 €</h3>
                                <button className='buttonPrices'>
                                    <a href="#aparcamiento2">
                                        <span>More Info</span>
                                    </a>
                                </button>
                            </div>
                            <div className="tablaprecios">
                                <div className="textosh2">
                                    <h2>Parking Zone 3</h2>
                                </div>
                                <img className="preciosimg" src={Estacionamiento} alt="img1"></img>
                                <h3>300 €</h3>
                                <button className='buttonPrices'>
                                    <a href="#aparcamiento3">
                                        <span>More Info</span>
                                    </a>
                                </button>
                            </div>

                            <div className="tablaprecios">
                                <div className="textosh2">
                                    <h2>Toilets/Showers Rental</h2>
                                </div>
                                <img className="preciosimg" src={Ducha} alt="img2"></img>
                                <h3>1 € / 5'</h3>
                                <button className='buttonPrices'>
                                    <a href="#aseos">
                                        <span>More Info</span>
                                    </a>
                                </button>
                            </div>
                            <div className="tablaprecios">
                                <div className="textosh2">
                                    <h2>Appliances Rental</h2>
                                </div>
                                <img className="preciosimg" src={Electrodomesticos} alt="img3"></img>
                                <h3>5 € / 1h</h3>
                                <button className='buttonPrices'>
                                    <a href="#electrodomesticos">
                                        <span>More Info</span>
                                    </a>
                                </button>
                            </div>
                            <div className="tablaprecios">
                                <div className="textosh2">
                                    <h2>Filling/Emptying of Water</h2>
                                </div>
                                <img className="preciosimg" src={Agua} alt="img4"></img>
                                <h3>1.5 € / 3L</h3>
                                <button className='buttonPrices'>
                                    <a href="#aguas">
                                        <span>More Info</span>
                                    </a>
                                </button>
                            </div>

                            <div className="tablaprecios seguros">
                                <div className="textosh2">
                                    <h2>Climbing Insurance</h2>
                                </div>
                                <img className="preciosimg" src={Escalada} alt="img5"></img>
                                <h3>15€ / Adult</h3>
                                <h3>7 € / - 10 Years</h3>
                                <button className='buttonPrices'>
                                    <a href="#escalada">
                                        <span>More Info</span>
                                    </a>
                                </button>
                            </div>
                            <div className="tablaprecios seguros">
                                <div className="textosh2">
                                    <h2>Archery Insurance</h2>
                                </div>
                                <img className="preciosimg" src={Arco} alt="img6"></img>
                                <h3>15€ / Adult</h3>
                                <h3>7 € / - 10 Years</h3>
                                <button className='buttonPrices'>
                                    <a href="#tiroarco">
                                        <span>More Info</span>
                                    </a>
                                </button>
                            </div>
                            <div className="tablaprecios seguros">
                                <div className="textosh2">
                                    <h2>Cycling Insurance</h2>
                                </div>
                                <img className="preciosimg" src={Bicicleta} alt="img7"></img>
                                <h3>15€ / Adult</h3>
                                <h3>7 € / - 10 Years</h3>
                                <button className='buttonPrices'>
                                    <a href="#ciclismo">
                                        <span>More Info</span>
                                    </a>
                                </button>
                            </div>

                            <div className="tablaprecios seguros">
                                <div className="textosh2">
                                    <h2>Hiking Insurance</h2>
                                </div>
                                <img className="preciosimg" src={Senderismo} alt="img8"></img>
                                <h3>15€ / Adult</h3>
                                <h3>7 € / - 10 Years</h3>
                                <button className='buttonPrices'>
                                    <a href="#senderismo">
                                        <span>More Info</span>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="contenedor2">
                            <div id="aparcamiento1" className="tablaprecios2">
                                <div className="textos2h2">
                                    <h2>Parking Zone 1</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <button className="buttonPrices2">
                                    <span><Link to="/Contacto">Book</Link></span>
                                </button>
                            </div>
                            <div id="aparcamiento2" className="tablaprecios2">
                                <div className="textos2h2">
                                    <h2>Parking Zone 2</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <button className="buttonPrices2">
                                    <span><Link to="/Contacto">Book</Link></span>
                                </button>
                            </div>
                            <div id="aparcamiento3" className="tablaprecios2">
                                <div className="textos2h2">
                                    <h2>Parking Zone 3</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <button className="buttonPrices2">
                                    <span><Link to="/Contacto">Book</Link></span>
                                </button>
                            </div>

                            <div id="aseos" className="tablaprecios2">
                                <div className="textos2h2">
                                    <h2>Toilets/Showers Rental</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <button className="buttonPrices2">
                                    <span><Link to="/Contacto">Book</Link></span>
                                </button>
                            </div>
                            <div id="electrodomesticos" className="tablaprecios2">
                                <div className="textos2h2">
                                    <h2>Appliances Rental</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <button className="buttonPrices2">
                                    <span><Link to="/Contacto">Book</Link></span>
                                </button>
                            </div>
                            <div id="aguas" className="tablaprecios2">
                                <div className="textos2h2">
                                    <h2>Water Filling/Emptying</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <button className="buttonPrices2">
                                    <span><Link to="/Contacto">Book</Link></span>
                                </button>
                            </div>

                            <div id="escalada" className="tablaprecios2">
                                <div className="textos2h2">
                                    <h2>Climbing Insurance</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <button className="buttonPrices2">
                                    <span><Link to="/Contacto">Rent</Link></span>
                                </button>
                            </div>
                            <div id="tiroarco" className="tablaprecios2">
                                <div className="textos2h2">
                                    <h2>Archery Insurance</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <button className="buttonPrices2">
                                    <span><Link to="/Contacto">Rent</Link></span>
                                </button>
                            </div>
                            <div id="ciclismo" className="tablaprecios2">
                                <div className="textos2h2">
                                    <h2>Cycling Insurance</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <button className="buttonPrices2">
                                    <span><Link to="/Contacto">Rent</Link></span>
                                </button>
                            </div>

                            <div id="senderismo" className="tablaprecios2">
                                <div className="textos2h2">
                                    <h2>Hiking Insurance</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.</p>
                                <button className="buttonPrices2">
                                    <span><Link to="/Contacto">Rent</Link></span>
                                </button>
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
