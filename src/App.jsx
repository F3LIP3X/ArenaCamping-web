import Cabecera from './sections/Cabecera';
import Portada from './sections/Portada';
import Servicios from './sections/Servicios';
import Precios from './sections/Precios';
import Actividades from './sections/Actividades';
import Normas from './sections/Normas';
import Llegar from './sections/Llegar';
import Reservar from './sections/Reservar';
import Pie from './sections/Pie';
import './sections/secciones.css';

export default function App() {
  return (
    <>
      <a className="salto-contenido" href="#contenido">
        Saltar al contenido
      </a>
      <Cabecera />
      <main id="contenido">
        <Portada />
        <Servicios />
        <Precios />
        <Actividades />
        <Normas />
        <Llegar />
        <Reservar />
      </main>
      <Pie />
    </>
  );
}
