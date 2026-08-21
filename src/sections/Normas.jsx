import { FiCheck, FiSlash } from 'react-icons/fi';

/* Normas literales del area. Se separan en dos columnas porque para quien
   llega con el vehiculo la pregunta real es binaria: puedo o no puedo.    */
const PERMITIDO = [
  'Autocaravanas, campers y caravanas',
  'Entrada y salida de 8:00 a 22:00',
  'Mascotas atadas dentro del recinto',
];

const PROHIBIDO = [
  'Tiendas de campaña',
  'Circular o hacer ruido de 23:00 a 8:00',
  'Barbacoas, por riesgo de incendio',
];

export default function Normas() {
  return (
    <section className="seccion" id="normas">
      <div className="envoltura">
        <header className="rotulo">
          <span className="rotulo__indice">04</span>
          <h2 className="rotulo__titulo">Normas</h2>
          <span className="rotulo__nota">El vandalismo se sanciona</span>
        </header>

        <div className="normas">
          <div className="normas__bloque normas__bloque--si">
            <h3 className="normas__titulo">Se permite</h3>
            <ul className="normas__lista">
              {PERMITIDO.map((n) => (
                <li key={n}>
                  <FiCheck className="normas__icono" aria-hidden="true" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="normas__bloque normas__bloque--no">
            <h3 className="normas__titulo">No se permite</h3>
            <ul className="normas__lista">
              {PROHIBIDO.map((n) => (
                <li key={n}>
                  <FiSlash className="normas__icono" aria-hidden="true" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
