/* Coordenadas tomadas del mapa que ya venia en el proyecto original. */
const LAT = 37.167628;
const LON = -3.628402;
const MAPA = `https://www.google.com/maps?q=${LAT},${LON}&hl=es&z=15&output=embed`;
const COMO_LLEGAR = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LON}`;

export default function Llegar() {
  return (
    <section className="seccion seccion--arena" id="llegar">
      <div className="envoltura">
        <header className="rotulo">
          <span className="rotulo__indice">05</span>
          <h2 className="rotulo__titulo">Cómo llegar</h2>
          <span className="rotulo__nota">Acceso asfaltado</span>
        </header>

        <div className="llegar">
          <div className="llegar__ficha">
            <dl className="llegar__datos">
              <div>
                <dt>Coordenadas</dt>
                <dd className="llegar__coordenada">
                  {LAT.toFixed(6)} N<br />
                  {Math.abs(LON).toFixed(6)} O
                </dd>
              </div>
              <div>
                <dt>Provincia</dt>
                <dd>Granada, Andalucía</dd>
              </div>
              <div>
                <dt>Acceso</dt>
                <dd>Pista asfaltada, apta para vehículos de hasta 8 m</dd>
              </div>
            </dl>
            <a
              className="boton"
              href={COMO_LLEGAR}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir en Maps
            </a>
          </div>

          <div className="llegar__mapa">
            <iframe
              src={MAPA}
              title="Mapa con la ubicación de Arena Camping"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
