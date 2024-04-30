import React from 'react';
import '../Inicio/inicio.css'

//Icons
import { IoIosContact } from "react-icons/io";


//Comando para comentar Ctrl + K + C
const contactPanel = () => {
    return (
        <div>
            <section id="contact">
                <div className="icon-text-container">
                    <h2 className="icon-text"><IoIosContact class="icon"/>Contact</h2>
                </div>

                <hr />
                <p>To make reservations or for more information, do not hesitate to contact us:</p>
                <p>📞Telephone: 123-456-789</p>
                <p>📫Email: info@campingnaturaleza.com</p>
            </section>
        </div>
    );
};

export default contactPanel;





