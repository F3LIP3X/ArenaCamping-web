import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const ENLACES = [
  { id: 'servicios', texto: 'Servicios' },
  { id: 'precios', texto: 'Precios' },
  { id: 'actividades', texto: 'Actividades' },
  { id: 'normas', texto: 'Normas' },
  { id: 'llegar', texto: 'Cómo llegar' },
];

export default function Cabecera() {
  const [abierto, setAbierto] = useState(false);
  const [fondo, setFondo] = useState(false);

  useEffect(() => {
    const alScroll = () => setFondo(window.scrollY > 80);
    alScroll();
    window.addEventListener('scroll', alScroll, { passive: true });
    return () => window.removeEventListener('scroll', alScroll);
  }, []);

  return (
    <header className={`cabecera${fondo ? ' cabecera--fija' : ''}`}>
      <div className="cabecera__interior envoltura">
        <a className="marca" href="#inicio" onClick={() => setAbierto(false)}>
          <span className="marca__nombre">Arena</span>
          <span className="marca__tipo">Área de autocaravanas</span>
        </a>

        <button
          className="cabecera__boton"
          type="button"
          aria-expanded={abierto}
          aria-controls="menu-principal"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setAbierto((v) => !v)}
        >
          {abierto ? <FiX /> : <FiMenu />}
        </button>

        <nav
          id="menu-principal"
          className={`menu${abierto ? ' menu--abierto' : ''}`}
          aria-label="Navegación principal"
        >
          <ul className="menu__lista">
            {ENLACES.map((e) => (
              <li key={e.id}>
                <a href={`#${e.id}`} onClick={() => setAbierto(false)}>
                  {e.texto}
                </a>
              </li>
            ))}
          </ul>
          <a className="boton menu__reserva" href="#reservar" onClick={() => setAbierto(false)}>
            Reservar plaza
          </a>
        </nav>
      </div>
    </header>
  );
}
