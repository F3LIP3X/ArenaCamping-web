import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Import Tailwind
import 'tailwindcss/tailwind.css';

//Páginas

import Inicio from './components/Inicio/Inicio';
import Servicios from './components/Servicios/Servicios';
import Actividades from './components/Actividades/Actividades';
//import Entorno from './components/Entorno/Entorno';
import Contacto from './components/Contacto/Contacto';
//import Precios from './components/Precios/Precios';
//import Localización from './components/Localización/Localización';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/Servicios" element={<Servicios />} />
          <Route exact path="/Actividades" element={<Actividades />} />
          
          {/* No estan completos :) */}
          <Route exact path="/Entorno" element={<Actividades />} />
          <Route exact path="/Contacto" element={<Contacto />} />
          <Route exact path="/Precios" element={<Actividades />} />
          <Route exact path="/Localización" element={<Actividades />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
