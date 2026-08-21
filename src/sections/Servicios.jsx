import parking from '../components/assets/Imagenes Servicios/parking.webp';
import electricidad from '../components/assets/Imagenes Servicios/electricidad.webp';
import duchas from '../components/assets/Imagenes Servicios/duchas.webp';
import vaciado from '../components/assets/Imagenes Servicios/vaciadoaguas.webp';
import electrodomesticos from '../components/assets/Imagenes Servicios/electrodomesticos.webp';
import arealibre from '../components/assets/Imagenes Servicios/arealibre.webp';

const SERVICIOS = [
  {
    titulo: 'Parcela con luz',
    detalle: 'Toma de 220 V en cada plaza, con contador propio.',
    foto: electricidad,
  },
  {
    titulo: 'Agua y vaciado',
    detalle: 'Llenado de depósito y vaciado de aguas grises y negras.',
    foto: vaciado,
  },
  {
    titulo: 'Duchas y aseos',
    detalle: 'Agua caliente por fichas, disponibles las 24 horas.',
    foto: duchas,
  },
  {
    titulo: 'Parking vigilado',
    detalle: 'Recinto cerrado con acceso controlado de 8:00 a 22:00.',
    foto: parking,
  },
  {
    titulo: 'Lavadora y secadora',
    detalle: 'Electrodomésticos de uso común por horas.',
    foto: electrodomesticos,
  },
  {
    titulo: 'Zona de estancia',
    detalle: 'Área libre y sombreada para pasar el rato fuera del vehículo.',
    foto: arealibre,
  },
];

export default function Servicios() {
  return (
    <section className="seccion" id="servicios">
      <div className="envoltura">
        <header className="rotulo">
          <span className="rotulo__indice">01</span>
          <h2 className="rotulo__titulo">Servicios</h2>
          <span className="rotulo__nota">Wi-Fi incluido</span>
        </header>

        <ul className="rejilla-servicios">
          {SERVICIOS.map((s) => (
            <li className="servicio" key={s.titulo}>
              <div className="servicio__foto">
                <img src={s.foto} alt="" loading="lazy" />
              </div>
              <h3 className="servicio__titulo">{s.titulo}</h3>
              <p className="servicio__detalle">{s.detalle}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
