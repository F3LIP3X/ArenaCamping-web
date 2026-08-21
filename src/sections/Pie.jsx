import { FaFacebookF, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { TELEFONO, CORREO } from './Reservar';

const REDES = [
  { nombre: 'Facebook', Icono: FaFacebookF, url: 'https://facebook.com' },
  { nombre: 'X', Icono: FaXTwitter, url: 'https://x.com' },
  { nombre: 'Instagram', Icono: FaInstagram, url: 'https://instagram.com' },
];

export default function Pie() {
  return (
    <footer className="pie">
      <div className="pie__interior envoltura">
        <div className="pie__marca">
          <span className="marca__nombre">Arena</span>
          <span className="marca__tipo">Área de autocaravanas · Granada</span>
        </div>

        <ul className="pie__contacto">
          <li>
            <a href={`tel:${TELEFONO.replace(/\s/g, '')}`}>{TELEFONO}</a>
          </li>
          <li>
            <a href={`mailto:${CORREO}`}>{CORREO}</a>
          </li>
        </ul>

        <ul className="pie__redes">
          {REDES.map(({ nombre, Icono, url }) => (
            <li key={nombre}>
              <a href={url} target="_blank" rel="noopener noreferrer" aria-label={nombre}>
                <Icono aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="pie__legal envoltura">
        <p>© {new Date().getFullYear()} Arena Camping</p>
        <p>Proyecto de prácticas · Granada</p>
      </div>
    </footer>
  );
}
