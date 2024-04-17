import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import '../Contacto/contacto.css';

// Icono
import icon from '../assets/logo.ico';
import SocialPanel from '../Moduls/social';
import HeaderPanel from '../Moduls/header';



const FifthIndex = () => {
    return (
        <div className='wrapper'>
            <HeaderPanel />
            <div className="main-content">
                <main className='informacion'>
                    <section>
                        <h2>Contacto</h2>
                    </section>
                    <SocialPanel />
                    <section className="formulario">
                        <h2>Si tiene alguna duda, envíanos un mensaje</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="matricula" >Matrícula:</label>
                                <input type="text" id="matricula" name="matricula"  maxLength="7"/>
                              
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Correo Electrónico:</label>
                                <input type="email" id="email" name="email" maxLength="30" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mensaje">Mensaje:</label>
                                <textarea id="mensaje" name="mensaje" maxLength="200 "></textarea>
                            </div>
                            <button type="submit">Enviar</button>
                        </form>
                    </section>

                </main>
            </div>
            
          
        </div>
    );
};

export default FifthIndex;
