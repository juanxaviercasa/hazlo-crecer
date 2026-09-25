import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home.jsx';
import { Resultados } from '../pages/Resultados/Resultados.jsx';
import { Auditoria } from '../pages/Auditoria/Auditoria.jsx';
import { Admin } from '../pages/Admin/Admin.jsx';
import { WhatsAppFloat } from '../components/WhatsAppFloat/WhatsAppFloat.jsx';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resultados" element={<Resultados />} />
        <Route path="/auditoria" element={<Auditoria />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contacto" element={<Navigate to="/auditoria" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <WhatsAppFloat />
    </BrowserRouter>
  );
}
