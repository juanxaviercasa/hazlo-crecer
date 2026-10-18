import {WebAgent} from '../components/WebAgent/WebAgent.jsx';
import { Offers, DentalAlias } from '../pages/Offers/Offers.jsx';
import { Privacidad } from '../pages/Privacidad/Privacidad.jsx';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home.jsx';
import { Resultados } from '../pages/Resultados/Resultados.jsx';
import { Auditoria } from '../pages/Auditoria/Auditoria.jsx';
import { Admin } from '../pages/Admin/Admin.jsx';
import { WhatsAppFloat } from '../components/WhatsAppFloat/WhatsAppFloat.jsx';
import { Servicios } from '../pages/Servicios/Servicios.jsx';
import { RouteMetadata } from '../components/RouteMetadata/RouteMetadata.jsx';

export function AppRouter() {
  return (
    <BrowserRouter>
      <RouteMetadata/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/resultados" element={<Resultados />} />
        <Route path="/auditoria" element={<Auditoria />} />
        <Route path="/privacidad" element={<Privacidad />} /><Route path="/admin" element={<Admin />} />
        <Route path="/contacto" element={<Navigate to="/auditoria" replace />} />
        <Route path="/sectores" element={<Offers />} /><Route path="/salud/odontologia" element={<DentalAlias />} /><Route path="/:area/:category" element={<Offers />} /><Route path="/:area" element={<Offers />} /><Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <WhatsAppFloat />
      <WebAgent />
    </BrowserRouter>
  );
}
