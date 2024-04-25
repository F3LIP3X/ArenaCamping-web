import React from 'react';
import '../../Inicio/inicio.css'

//Icons
import { FaBicycle } from "react-icons/fa";


const MoreInfoCiclismo = () => {
    return (
        <div>
            <section>
                <div className="icon-text-container">
                    <h2 className="icon-text"><FaBicycle class="icon" /> Bicycle Routes</h2>
                </div>
                <br />
                <div>
                    <div>
                        <h4>Discover them all</h4>
                    </div>
                    <div>
                        <h4>
                            Sierra Nevada Route
                        </h4>
                    </div>
                    <div>
                        <h4>
                            Alpujarras Route
                        </h4>
                    </div>
                    <div>
                        <h4>
                            Doñana Natural Park Route
                        </h4>
                    </div>

                    <br />
                    <h4>Road Cycling Routes</h4>

                    <div>
                        <h4>
                            Sierra Nevada Route
                        </h4>
                    </div>
                    <div>
                        <h4>
                            Alpujarras Route
                        </h4>
                    </div>
                    <div>
                        <h4>
                            Doñana Natural Park Route
                        </h4>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MoreInfoCiclismo;
