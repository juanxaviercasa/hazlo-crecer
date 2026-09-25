import { Link } from 'react-router-dom';

export function Navigation() {
  return <header className="site-header"><nav className="container nav"><Link className="brand" to="/"><span className="brand-mark" />Hazlo<span>Crecer</span></Link><div className="nav-links"><Link to="/">Inicio</Link><Link to="/resultados">Resultados</Link><Link to="/#servicios">Ecosistema</Link><Link to="/#nosotros">Nosotros</Link></div><Link className="button" to="/auditoria">Solicitar auditoría</Link></nav></header>;
}
