import senderismo from '../components/assets/ImagenesActividades/SenderismoBosque.jpg';
/* El repositorio no trae ninguna foto de escalada: lo unico disponible era
   un pictograma de stock que desentonaba entre fotografias reales. Se usa
   el paisaje de roca hasta que haya una foto propia de la via. */
import escalada from '../components/assets/Imagenes Entornos/Paisaje4k.webp';
import ciclismo from '../components/assets/ImagenesActividades/BiciMontaña.jpg';
import arco from '../components/assets/ImagenesActividades/TiroConArco1.jpg';

const ACTIVIDADES = [
  {
    nombre: 'Senderismo',
    detalle: 'Rutas señalizadas que salen del propio recinto hacia el pinar.',
    foto: senderismo,
  },
  {
    nombre: 'Escalada',
    detalle: 'Vías equipadas en la pared de roca a diez minutos en coche.',
    foto: escalada,
  },
  {
    nombre: 'Ciclismo',
    detalle: 'Carretera y montaña, con taller y limpieza de bicis en el área.',
    foto: ciclismo,
  },
  {
    nombre: 'Tiro con arco',
    detalle: 'Campo de prácticas con material y monitor los fines de semana.',
    foto: arco,
  },
];

export default function Actividades() {
  return (
    <section className="seccion seccion--oscura" id="actividades">
      <div className="envoltura">
        <header className="rotulo">
          <span className="rotulo__indice">03</span>
          <h2 className="rotulo__titulo">Actividades</h2>
          <span className="rotulo__nota">Seguro desde 7 €</span>
        </header>

        <ul className="rejilla-actividades">
          {ACTIVIDADES.map((a) => (
            <li className="actividad" key={a.nombre}>
              <img className="actividad__foto" src={a.foto} alt="" loading="lazy" />
              <div className="actividad__texto">
                <h3 className="actividad__nombre">{a.nombre}</h3>
                <p className="actividad__detalle">{a.detalle}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
