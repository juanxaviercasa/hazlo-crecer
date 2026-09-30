import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function WhatsAppFloat({ 
  phone = "51925475034",
  message = "Hola equipo de Hazlo Crecer, deseo solicitar un diagnóstico de Inteligencia Artificial para mi empresa." 
}) {
  const [showToast, setShowToast] = useState(false);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    // Mostrar tooltip/toast con retraso elegante
    const timer = setTimeout(() => {
      setShowToast(true);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <aside aria-label="Contacto directo por WhatsApp" className="whatsapp-luxury-widget">
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="whatsapp-agent-toast"
          >
            <div className="toast-header">
              <div className="toast-agent-avatar">
                <img src="/assets/images/hazlo-crecer-logo.jpg" alt="Hazlo Crecer AI" />
                <span className="toast-status-ring" />
              </div>
              <div className="toast-agent-info">
                <strong>Agente Comercial IA</strong>
                <span>En línea ahora · Lima, Perú</span>
              </div>
              <button 
                type="button" 
                className="toast-close-btn" 
                onClick={(e) => { e.preventDefault(); setShowToast(false); }}
                aria-label="Cerrar notificación"
              >
                ✕
              </button>
            </div>
            <p className="toast-message">
              ¿Quieres saber cuántos leads se fugan de tu web o cómo automatizar tu WhatsApp? Escríbeme y te respondo en <strong>5 segundos</strong>.
            </p>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="toast-cta-link"
            >
              <span>Iniciar chat directo</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a 
        href={whatsappUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-luxury-capsule"
        title="Hablar con el Agente de IA en WhatsApp"
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="capsule-icon-wrap">
          <svg 
            width="22" 
            height="22" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          <span className="capsule-pulse-beacon" />
        </div>

        <div className="capsule-label">
          <div className="capsule-title-row">
            <span className="capsule-title">WhatsApp Inteligente</span>
            <span className="capsule-ai-badge">IA</span>
          </div>
          <span className="capsule-subtext">Respuesta &lt; 5s · 24/7</span>
        </div>
      </motion.a>
    </aside>
  );
}
