import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../Inicio/inicio.css';
import '../../Actividades/actividades.css';

const MoreInfoTiroArco = () => {
    // Função para verificar se é um dispositivo móvel
    const isMobileDevice = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    // Se não for um dispositivo móvel, retorna null para não renderizar o componente
    if (!isMobileDevice()) {
        return null;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Define o número de slides visíveis em telas grandes
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // Tamanho de tela a partir do qual o número de slides é ajustado
                settings: {
                    slidesToShow: 2 // Define o número de slides visíveis em telas menores
                }
            },
            {
                breakpoint: 480, // Tamanho de tela a partir do qual o número de slides é ajustado
                settings: {
                    slidesToShow: 1 // Define o número de slides visíveis em telas muito pequenas
                }
            }
        ]
    };

    return (
        <div>
            <section>
                <h2>Tiro Con Arco</h2>
                <h4>Pon a prueba tu punteria en nuestra zona de tiro con arco</h4>
                <br />

                {/* Carousel */}
                <Slider {...settings}>
                    <div>
                        <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" alt="Foto 1" />
                    </div> 
                    <div>
                        <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box" alt="Foto 2" />
                    </div> 
                    <div>
                        <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" alt="Foto 3" />
                    </div> 
                    <div>
                        <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box" alt="Foto 4" />
                    </div> 
                    <div>
                        <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box" alt="Foto 5" />
                    </div> 
                    <div>
                        <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box" alt="Foto 6" />
                    </div> 
                    <div>
                        <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" alt="Foto 7" />
                    </div>
                </Slider>
                
            </section>
        </div>
    );
};

export default MoreInfoTiroArco;

