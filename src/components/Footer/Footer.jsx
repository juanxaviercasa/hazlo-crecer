import { Link } from 'react-router-dom';
import { Brand, Arrow } from '../Brand/Brand.jsx';
import { openStorageNotice } from '../StorageNotice/StorageNotice.jsx';
import { whatsappLink } from '../../services/contact.js';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Brand light />
          <p>Infraestructura comercial y Agentes de IA.<br />Páginas ultrarrápidas y conversión activa en WhatsApp.</p>
          <span className="footer-location">Lima Metropolitana, Perú · RUC 10760184450</span>
        </div>
        <div>
          <h2>Explora</h2>
          <Link to="/servicios">Nuestros servicios</Link>
          <Link to="/resultados">Casos y Modelos de Solución</Link>
          <a href="/#comparativa">Por qué fallan las webs tradicionales</a>
          <a href="/#calculadora">Calculadora de Fuga en WhatsApp</a>
        </div>
        <div>
          <h2>Empecemos</h2>
          <Link to="/auditoria">Evaluar elegibilidad <Arrow diagonal /></Link>
          <a href={whatsappLink('Hola Hazlo Crecer, quisiera conversar sobre las opciones de automatización para mi negocio.')} target="_blank" rel="noopener noreferrer">
            Conversar por WhatsApp
          </a>
          <a href="https://panel.hazlocrecer.com/">Portal del cliente</a>
          <Link to="/privacidad">Protección de datos</Link>
        </div>
      </div>
      <nav className="container footer-legal" aria-label="Información legal">
        <Link to="/aviso-legal">Aviso legal</Link>
        <Link to="/privacidad">Privacidad</Link>
        <Link to="/terminos">Términos y condiciones</Link>
        <Link to="/cookies">Cookies</Link>
        <Link to="/libro-de-reclamaciones">Libro de Reclamaciones</Link>
        <button type="button" onClick={openStorageNotice}>Aviso de almacenamiento</button>
      </nav>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Hazlo Crecer · Todos los derechos reservados</p>
        <p>Facturación formal con RUC · Sesión técnica para empresas calificadas · Código 100% propio</p>
      </div>
    </footer>
  );
}
