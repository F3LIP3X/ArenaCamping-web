import React from 'react';

// CSS
import '../Contacto/contacto.css';

//Moduls
import FooterPanel from '../Moduls/footer';
import SocialPanel from '../Moduls/social';
import Header from '../Moduls/header';
import ContactPanel from '../Moduls/contacto';

// Icono




const FifthIndex = () => {
    return (
        <div>
            <Header />
            <div className="main-content">
                <main className='informacion'>
                    <section>
                        <h2>Contacto</h2>
                    </section>

                    <section className="formulario">
                        <h2>Si tiene alguna duda, envíanos un mensaje.</h2>
                        <form>
                            <div className="form-control">
                                <input type="text" required maxLength="7"/>
                                <label>
                                    <span style={{ transitionDelay: '0ms' }}>M</span>
                                    <span style={{ transitionDelay: '50ms' }}>a</span>
                                    <span style={{ transitionDelay: '100ms' }}>t</span>
                                    <span style={{ transitionDelay: '150ms' }}>r</span>
                                    <span style={{ transitionDelay: '200ms' }}>i</span>
                                    <span style={{ transitionDelay: '250ms' }}>c</span>
                                    <span style={{ transitionDelay: '300ms' }}>u</span>
                                    <span style={{ transitionDelay: '350ms' }}>l</span>
                                    <span style={{ transitionDelay: '400ms' }}>a</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <input type="email" required maxLength="20" />
                                <label>
                                    <span style={{ transitionDelay: '0ms' }}>C</span>
                                    <span style={{ transitionDelay: '50ms' }}>o</span>
                                    <span style={{ transitionDelay: '100ms' }}>r</span>
                                    <span style={{ transitionDelay: '150ms' }}>r</span>
                                    <span style={{ transitionDelay: '200ms' }}>e</span>
                                    <span style={{ transitionDelay: '250ms' }}>o</span>
                                    <span style={{ transitionDelay: '253ms' }}></span>
                                    <span style={{ transitionDelay: '300ms' }}>E</span>
                                    <span style={{ transitionDelay: '350ms' }}>l</span>
                                    <span style={{ transitionDelay: '400ms' }}>e</span>
                                    <span style={{ transitionDelay: '450ms' }}>c</span>
                                    <span style={{ transitionDelay: '500ms' }}>t</span>
                                    <span style={{ transitionDelay: '550ms' }}>r</span>
                                    <span style={{ transitionDelay: '600ms' }}>ó</span>
                                    <span style={{ transitionDelay: '650ms' }}>n</span>
                                    <span style={{ transitionDelay: '700ms' }}>i</span>
                                    <span style={{ transitionDelay: '750ms' }}>c</span>
                                    <span style={{ transitionDelay: '800ms' }}>o</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <input type="text" required maxLength="198" />
                                <label>
                                    <span style={{ transitionDelay: '0ms' }}>M</span>
                                    <span style={{ transitionDelay: '50ms' }}>e</span>
                                    <span style={{ transitionDelay: '100ms' }}>n</span>
                                    <span style={{ transitionDelay: '150ms' }}>s</span>
                                    <span style={{ transitionDelay: '200ms' }}>a</span> 
                                    <span style={{ transitionDelay: '250ms' }}>j</span>
                                    <span style={{ transitionDelay: '300ms' }}>e</span>
                                </label>
                            </div>
                            <button type="submit">Enviar</button>
                        </form>
                    </section>
                    <ContactPanel />
                    <SocialPanel />
                    <FooterPanel />
                </main>
            </div>
        </div >
    );
};

export default FifthIndex;
