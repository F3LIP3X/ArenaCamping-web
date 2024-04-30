import React from 'react';
import '../../Inicio/inicio.css'

//Icons
import { FaHiking } from "react-icons/fa";

const MoreInfoSenderismo = () => {
    return (
        <div>
            <section>
                <div class="icon-text-container">
                    <h2 class="icon-text"><FaHiking class="icon"/> Hiking Circuits</h2>
                </div>
                <h4>Discover the best routes with the best landscapes on our excursions</h4>
                <br />

                <div>
                    <article>
                        <h2>Hiking</h2>

                        <div>
                            <article>
                                Beas de Granada Dams Route
                            </article>
                        </div>
                        <div>
                            <article>
                                Stroll
                            </article>
                        </div>
                        <div>
                            <article>
                                Doñana Natural Park Route
                            </article>
                        </div>
                    </article>
                </div>
                <br />
                <div>
                    <h2>Excursions</h2>

                    <div>
                        <article>
                            Mountain Excursion
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MoreInfoSenderismo;
