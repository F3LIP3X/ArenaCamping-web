import React from 'react';
import '../Actividades/actividades.css';
import icon from '../assets/logo.ico';
import { Link } from 'react-router-dom';


const actividades = () => {
    return (
        <div className='wrapper'>
            <header>
                <head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
                </head>
                
                <img id='icoHeader' src={icon} alt="Logo de Arena Camping" />
                <h1 id=''>Arena Camping</h1>
                <nav className='headBars'>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/Servicios">Servicio</Link></li>
                        <li><Link to="/Actividades">Actividades</Link></li>
                        <li><Link to="/page2#environment">Entorno</Link></li>
                        <li><Link to="/page2#contact">Contacto</Link></li>
                        <li><Link to="/page2#prices">Precios</Link></li>
                        <li><Link to="/page2#location">Localización</Link></li>
                    </ul>
                </nav>
            </header>
            <div className="main-content">
                <main className='titulo'>
                    <section id="home">
                        <h1>Actividades</h1>

                    </section>

                    <section id="actividad" class="tabla">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Camping Básico (Tienda de Campaña)</td>
                                    <button className='boton'>VER MÁS</button>

                                </tr>
                                <tr>
                                    <td>Bungalow Pequeño</td>
                                    <button className='boton'>VER MÁS</button>

                                </tr>
                                <tr>
                                    <td>Bungalow Grande</td>
                                    <button className='boton'>VER MÁS</button>

                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section className='Galeria'>
                        <img src="https://camperparkgranada.es/wp-content/uploads/2022/12/IMG-20221208-WA0021-e1671536902930-300x300.jpg" alt="img1" />
                        <img src="https://camperparkgranada.es/wp-content/uploads/2022/12/IMG-20221204-WA0004-e1671536865544-300x300.jpg" alt="img2" />
                        <img src="https://camperparkgranada.es/wp-content/uploads/2022/10/3-1-300x300.jpg" alt="img3" />
                        <img src="https://camperparkgranada.es/wp-content/uploads/2023/07/ciclismo-de-carretera-367x367.jpg" alt="img4" />
                    </section>

                    <section>
                        <h1 className="Parte4">¡No te pierdas nada!</h1>
                        <h4>Consulta aqui todas las noticias de Arena Camping Granada</h4>
                    </section>

                    <section>
                        <article className="articulos"> 
                        <i class="fa-solid fa-person"></i>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus risus nec sapien molestie, quis tincidunt magna ultrices. Proin rutrum metus nulla, eget rhoncus libero scelerisque vitae. Nam laoreet arcu pharetra massa iaculis pharetra. Vestibulum auctor, tortor ut posuere pellentesque, mauris ex auctor eros, id finibus ante lacus non tortor. Nam ut tortor commodo, condimentum dolor in, facilisis eros. Vivamus auctor nisl sed ultricies fermentum. Etiam sollicitudin rhoncus aliquam. Nunc vitae condimentum quam. Suspendisse consectetur dui et leo iaculis malesuada. Nam eget iaculis tellus. Quisque facilisis dapibus dui aliquam consectetur. Vivamus aliquet, massa ac laoreet vestibulum, turpis dolor consectetur nisi, vel finibus ex magna sed nibh. Cras aliquet arcu non elit mattis fringilla. Nulla condimentum malesuada hendrerit.
                        </article>
                        <article className="articulos">
                        <i class="fa-solid fa-person-walking"></i>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus risus nec sapien molestie, quis tincidunt magna ultrices. Proin rutrum metus nulla, eget rhoncus libero scelerisque vitae. Nam laoreet arcu pharetra massa iaculis pharetra. Vestibulum auctor, tortor ut posuere pellentesque, mauris ex auctor eros, id finibus ante lacus non tortor. Nam ut tortor commodo, condimentum dolor in, facilisis eros. Vivamus auctor nisl sed ultricies fermentum. Etiam sollicitudin rhoncus aliquam. Nunc vitae condimentum quam. Suspendisse consectetur dui et leo iaculis malesuada. Nam eget iaculis tellus. Quisque facilisis dapibus dui aliquam consectetur. Vivamus aliquet, massa ac laoreet vestibulum, turpis dolor consectetur nisi, vel finibus ex magna sed nibh. Cras aliquet arcu non elit mattis fringilla. Nulla condimentum malesuada hendrerit.
                        </article>
                        <article className="articulos">
                        <i class="fa-solid fa-bicycle"></i>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus risus nec sapien molestie, quis tincidunt magna ultrices. Proin rutrum metus nulla, eget rhoncus libero scelerisque vitae. Nam laoreet arcu pharetra massa iaculis pharetra. Vestibulum auctor, tortor ut posuere pellentesque, mauris ex auctor eros, id finibus ante lacus non tortor. Nam ut tortor commodo, condimentum dolor in, facilisis eros. Vivamus auctor nisl sed ultricies fermentum. Etiam sollicitudin rhoncus aliquam. Nunc vitae condimentum quam. Suspendisse consectetur dui et leo iaculis malesuada. Nam eget iaculis tellus. Quisque facilisis dapibus dui aliquam consectetur. Vivamus aliquet, massa ac laoreet vestibulum, turpis dolor consectetur nisi, vel finibus ex magna sed nibh. Cras aliquet arcu non elit mattis fringilla. Nulla condimentum malesuada hendrerit.
                        </article>
                        <article className="articulos">
                        <i class="fa-solid fa-bicycle"></i>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus risus nec sapien molestie, quis tincidunt magna ultrices. Proin rutrum metus nulla, eget rhoncus libero scelerisque vitae. Nam laoreet arcu pharetra massa iaculis pharetra. Vestibulum auctor, tortor ut posuere pellentesque, mauris ex auctor eros, id finibus ante lacus non tortor. Nam ut tortor commodo, condimentum dolor in, facilisis eros. Vivamus auctor nisl sed ultricies fermentum. Etiam sollicitudin rhoncus aliquam. Nunc vitae condimentum quam. Suspendisse consectetur dui et leo iaculis malesuada. Nam eget iaculis tellus. Quisque facilisis dapibus dui aliquam consectetur. Vivamus aliquet, massa ac laoreet vestibulum, turpis dolor consectetur nisi, vel finibus ex magna sed nibh. Cras aliquet arcu non elit mattis fringilla. Nulla condimentum malesuada hendrerit.
                        </article>

                    </section>
                    
                </main>
            </div>

            <footer className="footer-page">
                <div className='foot'>
                    <p>© 2024 | Felipe Toledano Escudero</p>
                    <nav>
                        <ul>
                            <li><a href="#home">Inicio</a></li>
                            <li><a href="#about">Acerca de</a></li>
                            <li><a href="#contact">Contacto</a></li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default actividades;
