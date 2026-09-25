import { motion } from 'framer-motion';

export function WhatsAppFloat({ 
  phone = "51981808180", // Configurable por el usuario
  message = "Hola equipo de Hazlo Crecer, deseo solicitar un diagnóstico de Inteligencia Artificial para mi empresa." 
}) {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <motion.aside 
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      aria-label="Contacto directo por WhatsApp"
      className="whatsapp-float-container"
    >
      <a 
        href={whatsappUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-float-btn"
        title="Hablar con un especialista por WhatsApp"
      >
        <span className="whatsapp-pulse"></span>
        <svg 
          width="26" 
          height="26" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
        <span className="whatsapp-label">
          <strong>WhatsApp Directo</strong>
          <small>Respuesta en &lt; 3 min</small>
        </span>
      </a>
    </motion.aside>
  );
}
