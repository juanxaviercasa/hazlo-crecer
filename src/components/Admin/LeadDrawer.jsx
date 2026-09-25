import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { updateLead } from '../../services/pocketbase.js';

const stages = ['Capturado', 'Contactado', 'En Auditoría', 'Cerrado'];

export function LeadDrawer({ lead, onClose, onUpdated }) {
  const [notes, setNotes] = useState(lead?.internal_notes || '');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => setNotes(lead?.internal_notes || ''), [lead]);
  if (!lead) return null;
  const phone = (lead.phone || '').replace(/\D/g, '');
  const stageIndex = Math.max(0, stages.findIndex(stage => stage.toLowerCase().includes((lead.status || 'capturado').toLowerCase())));

  async function saveNotes() {
    setSaving(true); setError('');
    try { const updated = await updateLead(lead.id, { internal_notes: notes }); onUpdated(updated); }
    catch { setError('No se pudieron guardar las notas.'); }
    finally { setSaving(false); }
  }

  return <><motion.div className="drawer-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} /><motion.aside className="lead-drawer" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 28, stiffness: 280 }} aria-label={`Detalle de ${lead.name}`}><button className="drawer-close" onClick={onClose} aria-label="Cerrar detalle">×</button><div className="drawer-header"><span className="eyebrow">Detalle del lead</span><h2>{lead.name || 'Sin nombre'}</h2><p>{lead.company || 'Empresa no indicada'}</p><span className={`status-badge status-${(lead.status || 'nuevo').toLowerCase().replaceAll(' ', '-')}`}>{lead.status || 'Nuevo'}</span></div><section className="drawer-section"><h3>Información</h3><dl className="lead-details"><div><dt>Email</dt><dd><a href={`mailto:${lead.email}`}>{lead.email || 'No indicado'}</a></dd></div><div><dt>Teléfono</dt><dd>{lead.phone || 'No indicado'} {phone && <a className="quick-action" href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer">WhatsApp</a>}</dd></div><div><dt>Facturación</dt><dd>{lead.revenue_range || 'No indicada'}</dd></div><div><dt>Cuello de botella</dt><dd>{lead.bottleneck || 'No indicado'}</dd></div><div><dt>Nicho</dt><dd>{lead.niche || 'No indicado'}</dd></div></dl></section><section className="loss-highlight"><span>Dinero perdido estimado</span><strong>{lead.estimated_loss ? `$${Number(lead.estimated_loss).toLocaleString('es-MX')}` : 'No calculado'}</strong></section><section className="drawer-section"><h3>Notas internas</h3><textarea value={notes} onChange={event => setNotes(event.target.value)} placeholder="Escribe el contexto de la conversación..." rows="6" /><button className="button" onClick={saveNotes} disabled={saving}>{saving ? 'Guardando...' : 'Guardar notas'}</button>{error && <p className="error">{error}</p>}</section><section className="drawer-section"><h3>Timeline</h3><ol className="lead-timeline">{stages.map((stage, index) => <li className={index <= stageIndex ? 'done' : ''} key={stage}><span>{index <= stageIndex ? '✓' : index + 1}</span>{stage}</li>)}</ol></section></motion.aside></>;
}
