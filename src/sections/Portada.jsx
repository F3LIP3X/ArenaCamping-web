import { FaWater, FaPlug, FaShower, FaWifi } from 'react-icons/fa6';
import { MdOutlineLocalCarWash, MdOutlineLocalParking } from 'react-icons/md';
import fondo from '../components/assets/Imagenes Entornos/Paisaje4k.webp';

/* El panel de servicio es el elemento que sostiene la pagina: es el tablero
   que un autocaravanista busca antes que ninguna otra cosa. Los seis
   pictogramas son los servicios reales del area; los datos de la banda
   inferior salen de las normas y de las coordenadas del propio mapa.      */
const SERVICIOS = [
  { Icono: FaWater, texto: 'Agua potable' },
  { Icono: MdOutlineLocalCarWash, texto: 'Vaciado de aguas' },
  { Icono: FaPlug, texto: 'Electricidad' },
  { Icono: FaShower, texto: 'Duchas y aseos' },
  { Icono: MdOutlineLocalParking, texto: 'Parking vigilado' },
  { Icono: FaWifi, texto: 'Wi-Fi' },
];

const DATOS = [
  { clave: 'Coordenadas', valor: '37.1676 N · 3.6284 O' },
  { clave: 'Acceso', valor: '8:00 – 22:00' },
  { clave: 'Silencio', valor: '23:00 – 8:00' },
  { clave: 'Admite', valor: 'Autocaravanas y campers' },
];

export default function Portada() {
  return (
    <section className="portada" id="inicio">
      <img className="portada__fondo" src={fondo} alt="" aria-hidden="true" />
      <div className="portada__velo" aria-hidden="true" />

      <div className="portada__interior envoltura">
        <p className="portada__antetitulo">Sierra de Granada</p>
        <h1 className="portada__titulo">
          Arena
          <span className="portada__titulo-linea">Camping</span>
        </h1>
        <p className="portada__entrada">
          Área de autocaravanas con agua, luz y vaciado a pie de plaza. Sin tiendas de
          campaña, sin ruido de madrugada y a media hora de la ciudad.
        </p>
        <div className="portada__acciones">
          <a className="boton" href="#reservar">
            Reservar plaza
          </a>
          <a className="boton boton--linea" href="#precios">
            Ver precios
          </a>
        </div>
      </div>

      <div className="panel">
        <div className="panel__interior envoltura">
          <ul className="panel__servicios">
            {SERVICIOS.map(({ Icono, texto }) => (
              <li className="panel__servicio" key={texto}>
                <Icono className="panel__icono" aria-hidden="true" />
                <span>{texto}</span>
              </li>
            ))}
          </ul>
          <dl className="panel__datos">
            {DATOS.map(({ clave, valor }) => (
              <div className="panel__dato" key={clave}>
                <dt>{clave}</dt>
                <dd>{valor}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
