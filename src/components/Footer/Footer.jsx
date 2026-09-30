import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Columna Marca */}
          <div className="footer-brand-col">
            <Link className="brand" to="/">
              <img src="/assets/images/hazlo-crecer-logo.jpg" alt="Hazlo Crecer Logo" className="brand-logo-img" />
              Hazlo<span>Crecer</span>
            </Link>
            <p className="footer-desc">
              Ecosistemas digitales de alta conversión y Agentes de IA para empresas B2B y Pymes escalables en Lima y Latinoamérica.
            </p>
            <div className="footer-status">
              <span className="status-dot-pulse" />
              <span>Sistemas de IA operativos 24/7 en Lima</span>
            </div>
          </div>

          {/* Columna Enlaces de Navegación */}
          <div className="footer-col">
            <h4 className="footer-title">Plataforma</h4>
            <ul className="footer-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/resultados">Casos de Éxito & ROI</Link></li>
              <li><a href="/#ecosistema">Ecosistema Tecnológico</a></li>
              <li><a href="/#comparativa">Ingeniería vs Tradición</a></li>
              <li><a href="/#metodologia">Metodología en 4 Fases</a></li>
              <li><Link to="/auditoria">Auditoría Gratuita</Link></li>
            </ul>
          </div>

          {/* Columna Soluciones */}
          <div className="footer-col">
            <h4 className="footer-title">Soluciones</h4>
            <ul className="footer-links">
              <li><span>Desarrollo Web React Ultrarrápido</span></li>
              <li><span>Agentes Autónomos en WhatsApp</span></li>
              <li><span>Optimización GEO & AIO (ChatGPT/Gemini)</span></li>
              <li><span>Integración CRM & PocketBase</span></li>
              <li><span>Embudos B2B Predecibles</span></li>
            </ul>
          </div>

          {/* Columna Contacto y Autoridad */}
          <div className="footer-col">
            <h4 className="footer-title">Contacto Lima</h4>
            <ul className="footer-links footer-contact">
              <li>
                <span className="contact-label">WhatsApp Directo:</span>
                <a href="https://wa.me/51925475034" target="_blank" rel="noopener noreferrer" className="highlight-link">
                  +51 925 475 034
                </a>
              </li>
              <li>
                <span className="contact-label">Sede:</span>
                <span>Lima Metropolitana, Perú</span>
              </li>
              <li>
                <span className="contact-label">Tiempo de Respuesta:</span>
                <span className="green">&lt; 3 minutos vía Agente IA</span>
              </li>
              <li>
                <span className="contact-label">Garantía:</span>
                <span>Código y datos 100% de tu propiedad</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="footer-bottom">
          <p>© {currentYear} Hazlo Crecer. Todos los derechos reservados. Diseñado bajo principios de Open Design.</p>
          <div className="footer-badges">
            <span className="footer-badge">⭐ 5.0 Google Reviews</span>
            <span className="footer-badge">⚡ React + Vite + AI</span>
            <span className="footer-badge">🔒 SSL Seguro</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
