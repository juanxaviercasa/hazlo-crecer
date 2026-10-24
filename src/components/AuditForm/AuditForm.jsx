import { whatsappLink } from '../../services/contact.js';
import { useCatalog } from '../../services/useCatalog.js';
import { useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { createLead } from '../../services/core.js';

const key = 'hazlo_audit_attempt_v2', draftKey = 'hazlo_audit_draft_v1';

function read() {
  try {
    return JSON.parse(localStorage.getItem(key) || 'null');
  } catch {
    return null;
  }
}

export function AuditForm({ business }) {
  const catalog = useCatalog();
  const [query] = useSearchParams();
  const category = catalog.categories.find(c => c.slug === (business?.categorySlug || query.get('categoria')));
  const [websiteStatus, setWebsiteStatus] = useState('');
  const [attempt, setAttempt] = useState(read);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const summary = useRef(null);

  const report = message => {
    setError(message);
    requestAnimationFrame(() => summary.current?.focus());
  };

  async function send(payload, id) {
    if (busy) return;
    setBusy(true);
    setError('');
    try {
      const receipt = await createLead(payload, id);
      const saved = { id, state: 'received', receipt: receipt.id };
      setAttempt(saved);
      localStorage.setItem(key, JSON.stringify(saved));
      sessionStorage.removeItem(draftKey);
    } catch (err) {
      if ([400, 413, 415, 422].includes(err.status)) {
        localStorage.removeItem(key);
        sessionStorage.removeItem(draftKey);
        setAttempt(null);
        report('Revisa los datos. La solicitud no fue aceptada.');
      } else {
        report(
          err.status === 409
            ? 'La referencia ya existe con otros datos. Consulta la recepción antes de cambiar el envío.'
            : 'No podemos confirmar la recepción. Puedes reintentar el mismo envío; no creará una segunda solicitud.'
        );
      }
    } finally {
      setBusy(false);
    }
  }

  async function submit(event) {
    event.preventDefault();
    if (busy || attempt) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const d = Object.fromEntries(new FormData(form)), id = crypto.randomUUID();
    const payload = {
      name: d.name.trim(),
      company: d.company.trim(),
      email: d.email.trim(),
      phone: d.phone.trim(),
      bottleneck: d.bottleneck.trim(),
      categorySlug: d.niche,
      consent: d.processing === 'on',
      websiteTrap: d.websiteTrap || '',
      websiteStatus: d.websiteStatus,
      ...(d.websiteStatus === 'has_website' ? { websiteUrl: d.websiteUrl.trim() } : {}),
      ...(business ? { businessId: business.id, categorySlug: business.categorySlug } : {})
    };
    try {
      sessionStorage.setItem(draftKey, JSON.stringify(payload));
      localStorage.setItem(key, JSON.stringify({ id, state: 'pending' }));
    } catch {
      report('Habilita el almacenamiento del navegador para controlar el envío o consulta por WhatsApp.');
      return;
    }
    setAttempt({ id, state: 'pending' });
    await send(payload, id);
  }

  async function retry() {
    try {
      const payload = JSON.parse(sessionStorage.getItem(draftKey) || 'null');
      if (!payload) {
        report('El borrador ya no está disponible. Consulta la recepción con tu referencia antes de enviar otra solicitud.');
        return;
      }
      await send(payload, attempt.id);
    } catch {
      report('No se pudo recuperar el borrador. Consulta por WhatsApp.');
    }
  }

  if (attempt?.state === 'received') {
    return (
      <section className="open-card marketing-panel" role="status">
        <h2>Solicitud recibida</h2>
        <p>Código de Referencia: <strong>{attempt.receipt}</strong></p>
        <p>
          Guardamos tu solicitud. Esta referencia confirma únicamente su recepción. Analizaremos tu velocidad móvil, Google Maps y respuesta en WhatsApp para entregarte el informe de prioridades; el diagnóstico se comunica por separado una vez revisado.
        </p>
        <div style={{ marginTop: '20px' }}>
          <a
            className="button button-lime"
            href={whatsappLink(`Hola Hazlo Crecer, acabo de solicitar mi diagnóstico gratuito en la web. Mi código de referencia es: ${attempt.receipt}`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Acelerar informe por WhatsApp ↗
          </a>
        </div>
      </section>
    );
  }

  return (
    <form onSubmit={submit} className="open-card marketing-panel">
      <h2>Solicita tu Diagnóstico Gratuito</h2>
      <p>Auditamos tu presencia web, velocidad móvil y tiempo de respuesta en WhatsApp para negocios en Lima.</p>
      
      <div ref={summary} tabIndex="-1" role={error ? 'alert' : undefined} className="marketing-error">
        {error}
      </div>

      {attempt ? (
        <div role="status">
          <p>{busy ? 'Enviando solicitud…' : 'Hay un envío pendiente de confirmar.'}</p>
          <p>Referencia: {attempt.id}</p>
          <button className="button" type="button" onClick={retry} disabled={busy}>
            Reintentar el mismo envío
          </button>
          <p>
            <a href={whatsappLink('Quisiera verificar mi solicitud. Referencia: ' + attempt.id)} target="_blank" rel="noopener noreferrer">
              Consultar recepción por WhatsApp
            </a>
          </p>
        </div>
      ) : (
        <>
          <div className="marketing-grid">
            {[
              ['name', 'Nombre del responsable', 'text', 100],
              ['company', 'Nombre de tu empresa o clínica', 'text', 160],
              ['email', 'Correo corporativo', 'email', 254],
              ['phone', 'WhatsApp de contacto directo', 'tel', 30]
            ].map(([name, label, type, max]) => (
              <label key={name} htmlFor={'audit-' + name}>
                {label}
                <input
                  id={'audit-' + name}
                  name={name}
                  type={type}
                  defaultValue={name === 'company' ? business?.name : undefined}
                  required
                  maxLength={max}
                  minLength={name === 'phone' ? 7 : 2}
                  autoComplete={{ name: 'name', company: 'organization', email: 'email', phone: 'tel' }[name]}
                />
              </label>
            ))}
          </div>

          <label htmlFor="audit-niche">Sector comercial</label>
          <select id="audit-niche" name="niche" disabled={Boolean(business)} required defaultValue={category?.slug || ''}>
            <option value="">Selecciona tu sector</option>
            {catalog.categories.map(c => (
              <option value={c.slug} key={c.slug}>{c.title}</option>
            ))}
            <option value="other">Otro servicio comercial o profesional</option>
          </select>

          <label htmlFor="audit-website-status">¿Tu negocio tiene sitio web actualmente?</label>
          <select
            id="audit-website-status"
            name="websiteStatus"
            required
            value={websiteStatus}
            onChange={event => setWebsiteStatus(event.target.value)}
          >
            <option value="">Selecciona una opción</option>
            <option value="has_website">Sí, tenemos página web activa</option>
            <option value="no_website">No tenemos web todavía</option>
            <option value="unknown">Tenemos una web pero está abandonada o desactualizada</option>
          </select>

          {websiteStatus === 'has_website' && (
            <>
              <label htmlFor="audit-website-url">Dirección de tu web actual</label>
              <input
                id="audit-website-url"
                name="websiteUrl"
                type="url"
                required
                pattern="https://.*"
                maxLength="2048"
                placeholder="https://tunegocio.com"
                aria-describedby="audit-website-help"
              />
              <p id="audit-website-help" className="roi-helper-text">
                Ingresa la dirección HTTPS para que evaluemos la velocidad de carga en teléfonos móviles en Perú.
              </p>
            </>
          )}

          {websiteStatus === 'no_website' && (
            <p className="roi-helper-text">Revisaremos tu presencia en Google Maps y WhatsApp para diseñar tu primer canal de ventas activo.</p>
          )}

          {websiteStatus === 'unknown' && (
            <p className="roi-helper-text">Analizaremos qué activos podemos rescatar para no empezar desde cero.</p>
          )}

          <label htmlFor="audit-bottleneck">¿Cuál es el principal cuello de botella que quieres resolver?</label>
          <input
            id="audit-bottleneck"
            name="bottleneck"
            required
            minLength="5"
            maxLength="500"
            placeholder="Ej: Demoramos en contestar WhatsApp, la web no genera ventas, muchos clientes faltan a citas..."
          />

          <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px' }}>
            <label>
              Deja este campo vacío
              <input name="websiteTrap" tabIndex="-1" autoComplete="off" />
            </label>
          </div>

          <label>
            <input type="checkbox" name="processing" required />
            Acepto el uso de estos datos para emitir mi diagnóstico y contactarme sobre los resultados.
          </label>
          <p>
            <Link to="/privacidad">Política de privacidad</Link>. Tratamiento formal con RUC en Lima, Perú. Cero spam ni cesión de datos.
          </p>

          <button className="button button-lime" type="submit" disabled={busy}>
            Solicitar Diagnóstico Gratuito en Lima
          </button>
        </>
      )}
    </form>
  );
}
