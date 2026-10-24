import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Brand, Arrow, Icon } from '../Brand/Brand.jsx';

export function Navigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const toggle = useRef(null);

  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  function escape(e) {
    if (e.key === 'Escape' && open) {
      setOpen(false);
      toggle.current?.focus();
    }
  }

  return (
    <header className="site-header" onKeyDown={escape}>
      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      <nav className="container nav" aria-label="Navegación principal">
        <Brand />
        <div className="nav-links">
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/servicios">Servicios</NavLink>
          <NavLink to="/resultados">Casos y Modelos</NavLink>
          <a href="/#comparativa">Por qué fallan las webs</a>
          <a href="/#calculadora">Calculadora ROI</a>
        </div>
        <Link className="button nav-cta button-lime" to="/auditoria">
          Evaluar Elegibilidad <Arrow diagonal />
        </Link>
        <button
          ref={toggle}
          className="mobile-menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen(!open)}
        >
          <Icon type={open ? 'close' : 'menu'} />
        </button>
      </nav>

      {open && (
        <nav id="mobile-navigation" className="mobile-navigation container" aria-label="Navegación móvil">
          <Link to="/">Inicio</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/resultados">Casos y Modelos</Link>
          <a href="/#comparativa">Por qué fallan las webs</a>
          <a href="/#calculadora">Calculadora de Fuga</a>
          <Link to="/auditoria" className="button button-lime">
            Evaluar Elegibilidad Comercial <Arrow />
          </Link>
        </nav>
      )}
    </header>
  );
}
