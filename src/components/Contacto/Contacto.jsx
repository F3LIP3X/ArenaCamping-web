import React from 'react';

// CSS
import '../Contacto/contacto.css';

// Moduls
import FooterPanel from '../Moduls/footer';
import SocialPanel from '../Moduls/social';
import Header from '../Moduls/header';
import ContactPanel from '../Moduls/contacto';

const FifthIndex = () => {
    return (
        <div>
            <Header />
            <div className="main-content">
                <main className='informacion'>
                    <section>
                        <h2>Contact</h2>
                    </section>

                    <section className="formulario">
                        <h2>If you have any questions, send us a message.</h2>
                        <form>
                            <div className="form-control">
                                <input type="text" required maxLength="7"/>
                                <label>
                                    <span style={{ transitionDelay: '0ms' }}>N</span>
                                    <span style={{ transitionDelay: '50ms' }}>a</span>
                                    <span style={{ transitionDelay: '100ms' }}>m</span>
                                    <span style={{ transitionDelay: '150ms' }}>e</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <input type="email" required maxLength="20" />
                                <label>
                                    <span style={{ transitionDelay: '0ms' }}>E</span>
                                    <span style={{ transitionDelay: '50ms' }}>m</span>
                                    <span style={{ transitionDelay: '100ms' }}>a</span>
                                    <span style={{ transitionDelay: '150ms' }}>i</span>
                                    <span style={{ transitionDelay: '200ms' }}>l</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <input type="text" required maxLength="198" />
                                <label>
                                    <span style={{ transitionDelay: '0ms' }}>M</span>
                                    <span style={{ transitionDelay: '50ms' }}>e</span>
                                    <span style={{ transitionDelay: '100ms' }}>s</span>
                                    <span style={{ transitionDelay: '150ms' }}>s</span>
                                    <span style={{ transitionDelay: '200ms' }}>a</span> 
                                    <span style={{ transitionDelay: '250ms' }}>g</span>
                                    <span style={{ transitionDelay: '300ms' }}>e</span>
                                </label>
                            </div>
                            <button type="submit">Send</button>
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
