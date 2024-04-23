import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Páginas
import Home from './components/IndexArena';
import Inicio from './components/Inicio/Inicio';
import Servicios from './components/Servicios/Servicios';
import Actividades from './components/Actividades/Actividades';
import Localización from './components/Localización/Localizacion';
import Contacto from './components/Contacto/Contacto';
import Precios from './components/Precios/Precios';
import Entorno from './components/Entorno/Entorno';
import Reserva from './components/Reserva/Reserva';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path="/Inicio" element={<Inicio />} />
          <Route exact path="/Servicios" element={<Servicios />} />
          <Route exact path="/Actividades" element={<Actividades />} />
          <Route exact path="/Localización" element={<Localización />} />
          <Route exact path="/Precios" element={<Precios />} />
          {/* No estan completos :) */}
          <Route exact path="/Entorno" element={<Entorno />} />
          <Route exact path="/Contacto" element={<Contacto />} />
          <Route exact path="/Precios" element={<Actividades />} />
          <Route exact path="/Reserva" element={<Reserva />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
