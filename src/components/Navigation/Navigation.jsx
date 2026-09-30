import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Cerrar menú móvil al navegar
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Prevenir scroll en body cuando el menú móvil esté abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="site-header">
      <nav className="container nav">
        {/* Brand */}
        <Link className="brand" to="/" aria-label="Hazlo Crecer - Inicio">
          <img src="/assets/images/hazlo-crecer-logo.jpg" alt="Hazlo Crecer Logo" className="brand-logo-img" />
          Hazlo<span>Crecer</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="nav-links">
          <Link 
            to="/" 
            className={location.pathname === '/' && !location.hash ? 'nav-link active' : 'nav-link'}
          >
            Inicio
          </Link>
          <Link 
            to="/resultados" 
            className={location.pathname === '/resultados' ? 'nav-link active' : 'nav-link'}
          >
            Resultados & Casos
          </Link>
          <a 
            href="/#ecosistema" 
            className={location.hash === '#ecosistema' ? 'nav-link active' : 'nav-link'}
          >
            Ecosistema IA
          </a>
          <a 
            href="/#comparativa" 
            className={location.hash === '#comparativa' ? 'nav-link active' : 'nav-link'}
          >
            Comparativa
          </a>
          <a 
            href="/#metodologia" 
            className={location.hash === '#metodologia' ? 'nav-link active' : 'nav-link'}
          >
            Metodología
          </a>
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="nav-actions">
          <Link className="button nav-cta" to="/auditoria">
            <span>Solicitar auditoría</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          {/* Botón Hamburger Móvil */}
          <button 
            type="button" 
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-line line-1" />
            <span className="hamburger-line line-2" />
            <span className="hamburger-line line-3" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-content">
          <div className="mobile-nav-header">
            <span className="eyebrow">Menú de Navegación</span>
            <div className="live-status-pill">
              <span className="status-dot" />
              <span>Agente en línea</span>
            </div>
          </div>

          <div className="mobile-nav-links">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <span>01.</span> Inicio
            </Link>
            <Link to="/resultados" onClick={() => setMobileMenuOpen(false)}>
              <span>02.</span> Resultados & Casos de Éxito
            </Link>
            <a href="/#ecosistema" onClick={() => setMobileMenuOpen(false)}>
              <span>03.</span> Ecosistema de IA
            </a>
            <a href="/#comparativa" onClick={() => setMobileMenuOpen(false)}>
              <span>04.</span> Ingeniería vs Tradición
            </a>
            <a href="/#metodologia" onClick={() => setMobileMenuOpen(false)}>
              <span>05.</span> Metodología en 4 Fases
            </a>
            <a href="/#faq" onClick={() => setMobileMenuOpen(false)}>
              <span>06.</span> Preguntas Frecuentes
            </a>
          </div>

          <div className="mobile-nav-footer">
            <Link 
              className="button full-width" 
              to="/auditoria" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Solicitar Auditoría Gratuita
            </Link>
            <a 
              className="button ghost full-width"
              href="https://wa.me/51925475034?text=Hola%20Hazlo%20Crecer%2C%20quiero%20conocer%20c%C3%B3mo%20un%20agente%20de%20IA%20puede%20escalar%20mis%20ventas"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp Inmediato
            </a>
            <div className="mobile-nav-info">
              <small>Lima, Perú · Respuesta promedio &lt; 3 min</small>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
