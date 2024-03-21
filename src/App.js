import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import inicio from './components/Inicio/Inicio';
import servicios from './components/Servicios/Servicios';
import actividades from './components/Actividades/Actividades';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/Inicio" element={<inicio />} />
          <Route exact path="/Servicios" element={<servicios />} />
          <Route exact path="/Actividades" element={<actividades />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;