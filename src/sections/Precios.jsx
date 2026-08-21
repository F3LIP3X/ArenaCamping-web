/* Precios reales tomados del contenido original del proyecto. */
const PARCELAS = [
  {
    zona: 'Zona 1',
    precio: '100',
    periodo: '€ / mes',
    detalle: 'Plaza estándar hasta 6 m, con toma de luz.',
    destacada: false,
  },
  {
    zona: 'Zona 2',
    precio: '200',
    periodo: '€ / mes',
    detalle: 'Plaza amplia hasta 8 m, con sombra y toma de luz.',
    destacada: true,
  },
  {
    zona: 'Zona 3',
    precio: '300',
    periodo: '€ / mes',
    detalle: 'Plaza doble con acceso directo al punto de vaciado.',
    destacada: false,
  },
];

const SUELTOS = [
  { concepto: 'Duchas y aseos', precio: '1 €', unidad: 'por 5 min' },
  { concepto: 'Lavadora o secadora', precio: '5 €', unidad: 'por hora' },
  { concepto: 'Llenado y vaciado de agua', precio: '1,50 €', unidad: 'por 3 L' },
  { concepto: 'Seguro de actividad, adulto', precio: '15 €', unidad: 'por persona' },
  { concepto: 'Seguro de actividad, menor de 10', precio: '7 €', unidad: 'por persona' },
];

export default function Precios() {
  return (
    <section className="seccion seccion--arena" id="precios">
      <div className="envoltura">
        <header className="rotulo">
          <span className="rotulo__indice">02</span>
          <h2 className="rotulo__titulo">Precios</h2>
          <span className="rotulo__nota">IVA incluido</span>
        </header>

        <ul className="rejilla-parcelas">
          {PARCELAS.map((p) => (
            <li
              className={`parcela${p.destacada ? ' parcela--destacada' : ''}`}
              key={p.zona}
            >
              {p.destacada && <span className="parcela__marca">La más pedida</span>}
              <h3 className="parcela__zona">{p.zona}</h3>
              <p className="parcela__precio">
                <span className="parcela__cifra">{p.precio}</span>
                <span className="parcela__periodo">{p.periodo}</span>
              </p>
              <p className="parcela__detalle">{p.detalle}</p>
              <a className="parcela__enlace" href="#reservar">
                Reservar {p.zona.toLowerCase()}
              </a>
            </li>
          ))}
        </ul>

        <div className="sueltos">
          <h3 className="sueltos__titulo">Servicios sueltos</h3>
          <table className="tarifa">
            <caption className="tarifa__pie">
              Se pagan en recepción o en el propio punto de servicio.
            </caption>
            <tbody>
              {SUELTOS.map((s) => (
                <tr key={s.concepto}>
                  <th scope="row">{s.concepto}</th>
                  <td className="tarifa__precio">{s.precio}</td>
                  <td className="tarifa__unidad">{s.unidad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
