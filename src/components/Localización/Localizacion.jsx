import React from 'react';
import '../Inicio/inicio.css'

import FooterPanel from '../Moduls/footer';
import HeaderPanel from '../Moduls/header';
import SocialPanel from '../Moduls/social';
import ContactPanel from '../Moduls/contacto';

// Shortcut to comment Ctrl + K + C
const locationPanel = () => {
    return (
        <div>
            <HeaderPanel />
            <div className="main-content">
                <main>
                    <section id="home">
                        <h2>Location</h2>
                    </section>
                    <section id="about">
                        <h2 id='aboutUs'>About Location</h2>
                        <hr />
                        <p>Welcome to Camping Vale Verde, a natural retreat that offers a unique escape for nature and adventure lovers. Situated amidst lush forests and bathed in sunlight filtered through the leaves, this camping site is a true paradise for those seeking disconnection and renewal.

                            Located off the beaten path, far from the distractions of everyday life, Camping Vale Verde offers an atmosphere of peace and tranquility that is hard to find elsewhere. Here, you can reconnect with nature, breathe fresh air, and recharge your energies while enjoying the simple comforts of outdoor life.

                            The accommodation options at Camping Vale Verde are as varied as the stars in the night sky. From tent camping under the tree canopies to areas for trailers and motorhomes, there is an option for every traveler style. And if you desire an even closer experience with nature, you can even choose to camp in a wild spot and enjoy the true feeling of freedom.

                            Outdoor activities are the highlight of this camping experience. Explore trails winding through ancient trees, discover crystal-clear streams where you can cool off on hot days, and enjoy bike rides or hikes to explore the surroundings. At night, gather around a crackling campfire to tell stories, roast marshmallows, and enjoy the camaraderie of fellow campers.

                            Whether you're seeking adventure or simply seeking serenity, Camping Vale Verde offers an unforgettable experience in nature's embrace.

                        </p>
                    </section>

                    <div className="container-form">
                        <section>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.3720634089427!2d-3.628402!3d37.167628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fc893bf850db%3A0x71683dc7
                                a592441b!2sHuerta%20del%20Sello!5e0!3m2!1spt-PT!2ses!4v1713258937859!5m2!1spt-PT!2ses"
                                id='iframeLocation'
                                title='MapaGeo'
                                height={600}
                                style={{ border: '0' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>

                        </section>

                    </div>

                    <ContactPanel />
                    <SocialPanel />
                    <FooterPanel />
                </main>
            </div>
        </div>
    );
};

export default locationPanel;
