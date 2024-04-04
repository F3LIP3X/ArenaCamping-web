import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio/Inicio';
import Servicios from './components/Servicios/Servicios';
import Actividades from './components/Actividades/Actividades';
//import Contacto from

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/Servicios" element={<Servicios />} />
          <Route exact path="/Actividades" element={<Actividades />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
