import { useState } from 'react';
import { signInAdmin } from '../../services/pocketbase.js';

export function AdminLogin({ onAuthenticated }) {
  const [identity, setIdentity] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      await signInAdmin(identity, password);
      onAuthenticated();
    } catch {
      setError('No se pudo iniciar sesión. Revisa tus credenciales.');
    } finally {
      setLoading(false);
    }
  }

  return <main className="admin-auth"><form className="admin-auth-card" onSubmit={submit}><span className="eyebrow">Centro de mando</span><h1>Acceso privado</h1><p>Gestiona los leads desde una sesión segura de PocketBase.</p><label>Correo o usuario<input autoComplete="username" value={identity} onChange={event => setIdentity(event.target.value)} required /></label><label>Contraseña<input type="password" autoComplete="current-password" value={password} onChange={event => setPassword(event.target.value)} required /></label>{error && <p className="error">{error}</p>}<button className="button" disabled={loading}>{loading ? 'Verificando...' : 'Entrar al CRM'}</button><a href="/">Volver al sitio público</a></form></main>;
}
