import { useState } from 'react';

/* Datos de contacto de ejemplo: sustituir por los reales antes de publicar. */
export const TELEFONO = '+34 958 000 000';
export const CORREO = 'reservas@arenacamping.es';

export default function Reservar() {
  const [enviado, setEnviado] = useState(false);

  const alEnviar = (evento) => {
    evento.preventDefault();
    setEnviado(true);
  };

  return (
    <section className="seccion seccion--oscura" id="reservar">
      <div className="envoltura">
        <header className="rotulo">
          <span className="rotulo__indice">06</span>
          <h2 className="rotulo__titulo">Reservar plaza</h2>
          <span className="rotulo__nota">Respuesta en 24 h</span>
        </header>

        <div className="reservar">
          <div className="reservar__aparte">
            <p className="reservar__texto">
              Dinos las fechas y el largo del vehículo y te confirmamos la plaza. Si
              prefieres hablarlo, llama y te lo resolvemos en el momento.
            </p>
            <ul className="reservar__contacto">
              <li>
                <span>Teléfono</span>
                <a href={`tel:${TELEFONO.replace(/\s/g, '')}`}>{TELEFONO}</a>
              </li>
              <li>
                <span>Correo</span>
                <a href={`mailto:${CORREO}`}>{CORREO}</a>
              </li>
              <li>
                <span>Recepción</span>
                <p>Todos los días, de 8:00 a 22:00</p>
              </li>
            </ul>
          </div>

          {enviado ? (
            <div className="reservar__hecho" role="status">
              <h3>Solicitud enviada</h3>
              <p>
                Te escribimos a {CORREO ? 'tu correo' : 'tu contacto'} en menos de 24
                horas con la confirmación y el número de plaza.
              </p>
            </div>
          ) : (
            <form className="formulario" onSubmit={alEnviar}>
              <div className="campo">
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" name="nombre" type="text" required />
              </div>
              <div className="campo">
                <label htmlFor="correo">Correo</label>
                <input id="correo" name="correo" type="email" required />
              </div>
              <div className="campo campo--mitad">
                <label htmlFor="entrada">Entrada</label>
                <input id="entrada" name="entrada" type="date" required />
              </div>
              <div className="campo campo--mitad">
                <label htmlFor="salida">Salida</label>
                <input id="salida" name="salida" type="date" required />
              </div>
              <div className="campo">
                <label htmlFor="largo">Largo del vehículo</label>
                <select id="largo" name="largo" defaultValue="hasta-6">
                  <option value="hasta-6">Hasta 6 m</option>
                  <option value="hasta-8">De 6 a 8 m</option>
                  <option value="mas-8">Más de 8 m</option>
                </select>
              </div>
              <div className="campo">
                <label htmlFor="nota">Algo que debamos saber</label>
                <textarea id="nota" name="nota" rows="3" />
              </div>
              <button className="boton formulario__enviar" type="submit">
                Pedir plaza
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
