import React from 'react';
import '../Inicio/inicio.css'

import FooterPanel from '../Moduls/footer';
import HeaderPanel from '../Moduls/header';
import SocialPanel from '../Moduls/social';
import GaleryPanel from '../Moduls/galery';

//Comando para comentar Ctrl + K + C
const locationPanel = () => {
    return (
        <div className='wrapper'>
            <HeaderPanel />
            <div className="main-content">
                <main>
                    <section id="home">
                        <h2>Localizacion</h2>
                    </section>
                    <section id="about">
                        <h2 id='aboutUs'>Sobre Nosotros</h2>
                        <hr />
                        <p>Bem-vindo ao Camping Vale Verde, um refúgio natural que oferece uma escapada única para os amantes da natureza e da aventura. Situado em meio a exuberantes bosques e banhado pela luz do sol filtrada pelas folhas, este local de camping é um verdadeiro paraíso para quem busca desconexão e renovação.

                            Localizado ao calhas, longe das distrações da vida cotidiana, o Camping Vale Verde oferece uma atmosfera de paz e tranquilidade que é difícil de encontrar em outros lugares. Aqui, você pode se reconectar com a natureza, respirar ar puro e recarregar suas energias enquanto desfruta do conforto simples da vida ao ar livre.

                            As opções de acomodação no Camping Vale Verde são tão variadas quanto as estrelas no céu noturno. Desde acampamentos em barracas sob as copas das árvores até áreas para trailers e motorhomes, há uma opção para cada estilo de viajante. E se você deseja uma experiência ainda mais próxima da natureza, pode até mesmo optar por acampar em um local selvagem e desfrutar da verdadeira sensação de liberdade.

                            As atividades ao ar livre são o destaque desta experiência de camping. Explore trilhas que serpenteiam por entre as árvores centenárias, descubra riachos cristalinos onde é possível se refrescar em dias quentes e desfrute de passeios de bicicleta ou caminhadas para explorar os arredores. À noite, reúna-se ao redor de uma fogueira crepitante para contar histórias, ass


                        </p>
                    </section>

                    <div class="container-form">
                        <section>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.3720634089427!2d-3.628402!3d37.167628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fc893bf850db%3A0x71683dc7
                                a592441b!2sHuerta%20del%20Sello!5e0!3m2!1spt-PT!2ses!4v1713258937859!5m2!1spt-PT!2ses"
                                id='iframeLocation'
                                height={600}
                                style={{ border: '0' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>

                        </section>

                    </div>

                    <section id="contact">
                        <h2 id='contactos'>Contacto</h2>
                        <hr />
                        <p>Para realizar reservas o para obtener más información, no dudes en contactarnos:</p>
                        <p>Teléfono: 123-456-789</p>
                        <p>Email: info@campingnaturaleza.com</p>
                    </section>

                    <SocialPanel />
                    <FooterPanel />
                </main>
            </div>
        </div>
    );
};

export default locationPanel;
